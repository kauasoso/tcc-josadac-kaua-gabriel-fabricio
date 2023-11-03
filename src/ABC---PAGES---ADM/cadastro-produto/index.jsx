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
    const [imagem, setImagem]= useState('')
    const [usuario, setUsuario] = useState('')
   const  [lista ,setLista] = useState ([])

  

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

   async function SalvarProdutos () {

    try {
        
    
        let url = `http://localhost:5001/cadastroproduto`

        const produto = {
            nome: nome ,
            categoria: categoria,
            preco: valor ,
            estoque: quantidade,
            imagem: imagem
        }

        let r = await axios.post(url, produto)
           toast.dark('CADASTRADO COM SUCESSO !')
        return r.status;

      

    } catch (error) {
        
    }
    }


    async function ConsultarProduto() {

        let url = 'http://localhost:5001/buscarporprodutos'
      
        let r = await axios.get(url)
      
        setLista(r.data)
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
                            <input className='url' type="text" placeholder='URL DA IMAGEM !' value={imagem} onChange={e => setImagem (e.target.value)} />
                            <input type="text" placeholder='NOME DO PRODUTO' value={nome} onChange={e => setNome (e.target.value)} />
                            <input type="text" placeholder='CATEGORIA' value={categoria} onChange={e => setCategoria (e.target.value)}/>
                            <input type="text" placeholder='VALOR DO PRODUTO' value={valor} onChange={e => setValor (e.target.value)}/>
                            <input type="text" placeholder='QUANTIDADE' value={quantidade} onChange={e => setQuantidade (e.target.value)}/>

                            <div>
                                <button className='salvar' onClick={SalvarProdutos} >SALVAR</button>
                             </div>

                        </div>


                        
                    </div>   {/* final da tag "d8" */} 
                      
                            <div className='h1-button'>

                                <div>
                                    <h1>CONSULTA:</h1>
                                </div>

                                <div className='input-lupa'>
                                    <input type="text"/>
                                    <img className='lupa' src="/assets/image/imgLupaConsulta.png" onClick={ConsultarProduto} alt="" />
                                </div>

                            </div>


                            <div className='tabelas'>
                               <table>

                                  <thead>
                                          <tr>
                                            <th>ID</th>
                                             <th>Nome</th>
                                             <th>Categoria</th>
                                             <th>Valor</th>
                                             <th>Quantidade</th>
                                          </tr>
                                  </thead>

                      {lista.map (item => {    
                        
                        return (
                        <tbody>
                                         <tr>
                                            <td>{item.id_produto}</td>
                                            <td>{item.nome}</td>
                                            <td>{item.categoria}</td>
                                            <td>{item.preco}</td>
                                            <td>{item.quantidade}</td>
                                            <td className='lado'><img className='img' src="./assets/image/caneta.png" alt="" />
                                                                 <img className='img' src="./assets/image/excluirr.png" alt="" />
                                             </td>
                                            
                                         </tr>
                        </tbody>
                                   )
                                        })}


                               </table>

                            </div>

                </div> {/* final da tag "d9" */}

                </div>

            </div>





        </div>


    )
}

 // setProdutos([])
 
        {/* <div className="consulta-produtos">
            {produtos.map((item) => {
                <img src={item.imagem} alt="" />
                
            })}
        </div> */}
