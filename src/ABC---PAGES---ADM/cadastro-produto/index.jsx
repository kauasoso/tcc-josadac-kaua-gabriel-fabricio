import './index.scss';
import Cabecalho2 from '../../cabecalho2';
import Cabecalho from '../../cabecalho';
import { useState } from 'react';
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import storage from 'local-storage';
import { useEffect } from 'react';


import 'react-toastify/dist/ReactToastify.css';


export default function CadastroProduto() {

let navigate = useNavigate()

    const [nome , setNome] = useState('');
    const [categoria, setCategoria] = useState('');
    const [valor , setValor] = useState(''); 
    const [quantidade , setQuantidade] = useState ('') ;
    const [imagem,setImagem]= useState('')
    const[usuario, setUsuario] = useState('')


  

    useEffect(() => {

        if (!storage('adm-logado')) {
            navigate('/loginadm')
        } else {
            const usuarioLogado = storage('adm-logado');
            setUsuario(usuarioLogado)
            console.log(usuarioLogado);
        }

    }, []) 



    
    function sairclick() {
        storage.remove('adm-logado')
        setTimeout(() => {
            navigate('/loginadm')
        }, 1800)

    }

   

    function escolherimagem() {
 document.getElementById('imagemCapa').click()
    }

    function mostrarImagem () {
      return URL.createObjectURL(imagem)

    }

   async function SalvarProdutos () {
 
        let url = `http://localhost:5001/cadastroproduto`

        const produto = {
            nome: nome ,
            categoria: categoria,
            preco: valor ,
            estoque: quantidade,
            imagem: imagem
        }

        const formData = new FormData();
        formData.append('capa', imagem)

        let r = await axios.post(url , produto, formData , {
            headers:{
                "Content-Type": "multipart/form-data"
            }
        })

        return r.status ;

    }


    return (
        <div className='mae-adm'>
            <ToastContainer />

            <div className='container'>

                <div className="espaco-1">
                    <div className='logoo'>
                        <img className='logo' src="./assets/image/logomelhor.png" alt="" />
                    </div>
                    <a href='/cadastroproduto' className='agendaa' >
                        <img className='agenda' src="./assets/image/imgCadastroProduto.png" alt="" />
                        <h3>CADASTRO</h3>
                    </a>

                  

                    <div className='agendaa'>
                        <img className='agenda' src="./assets/image/abcagenda.png" alt="" />
                        <h3>PEDIDOS</h3>
                    </div>


                            <a  className='agendaa' id='sairconta' onClick={sairclick}>
                                <img className='agenda' src="./assets/image/SAIR.png" alt="" />
                                <h3>SAIR DA CONTA</h3>
                             </a>

                </div>


                <div className="espaco-2">

                    <nav>
                        <div>
                            <h2>Administrador , {usuario ? usuario[0].nome : ''}</h2>
                        </div>

                        <div className='usuario-p'>
                            <p>NOVOS DADOS</p>
                            <img className='usuario' src="/assets/image/usuario.png" alt="" />
                        </div>

                    </nav>

                <div className='d9'>
                 
                    <div className='d8'> 
                        <div className='input-4'>
                            <input type="text" placeholder='NOME DO PRODUTO' value={nome} onChange={e => setNome (e.target.value)} />
                            <input type="text" placeholder='CATEGORIA' value={categoria} onChange={e => setCategoria (e.target.value)}/>
                            <input type="text" placeholder='VALOR DO PRODUTO' value={valor} onChange={e => setValor (e.target.value)}/>
                            <input type="text" placeholder='QUANTIDADE' value={quantidade} onChange={e => setQuantidade (e.target.value)}/>
                        </div>

                        <div className='cinzaa'>
                            <div className='cinza' onClick={escolherimagem} >

                               {!imagem &&
                                <img src="/assets/image/img-img.png" alt="" />
                               }

                              {imagem &&
                               <img className='imagem' src={mostrarImagem()} alt="" />
                              }

                                <input type="file" id='imagemCapa' onChange={e => setImagem (e.target.files[0])} />
                             </div>

                             <div>
                                <button className='salvar' onClick={SalvarProdutos} >SALVAR</button>
                             </div>

                        </div>

                        
                    </div>   {/* final da tag "d8" */} 
                      
                            <div className='h1-button'>

                                <div>
                                    <h1>CONSULTA :</h1>
                                </div>

                                <div className='input-lupa'>
                                    <input type="text" />
                                    <img className='lupa' src="/assets/image/imgLupaConsulta.png" alt="" />
                                </div>

                            </div>

                </div> {/* final da tag "d9" */}

                </div>

            </div>





        </div>


    )
}

