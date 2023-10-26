import './index.scss';
import Cabecalho2 from '../../cabecalho2';
import Cabecalho from '../../cabecalho';
import { useState } from 'react';
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import HomeAdm from '../../homeadm';
export default function CadastroProduto() {

    const [nomeProduto, setNomeProduto] = useState('');
    const [codigoCategoria, setCodigoCategoria] = useState('');
    const [precoVenda, setPrecoVenda] = useState('');
    const [quantidadeEstoque, setQuantidadeEstoque] = useState('');
    const [codigoProduto, setCodigoProduto] = useState('')
    const [erro, setErro] = useState([])

<<<<<<< HEAD
    async function CadastroProduto() {
=======

async function CadastroProduto () {
>>>>>>> cad713074e7ed44e7261ac7ab363741d98b3447a

        try {

            const url = `http://localhost:5001/cadastroproduto`;
            const produto = {
                nome: nomeProduto,
                categoria: codigoCategoria,
                preco: precoVenda,
                estoque: quantidadeEstoque,
                codigo: codigoProduto
            }


            const r = await axios.post(url, produto)

            toast.dark("✔️ Cadastrado Com Sucesso !")
        } catch (err) {
            if (err.response.status === 400) {
                setErro(err.response.data.erro)
                toast.dark("🔒 Não Foi Possível Cadastrar")
            }
        }

    }



    return (
        <div className='mae-admm'>
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

                    <a href='/consultaproduto' className='agendaa'>
                        <img className='agenda' src="./assets/image/imgLupaConsulta.png" alt="" />
                        <h3>CONSULTA</h3>
                    </a>
                    <div className='agendaa'>
                        <img className='agenda' src="./assets/image/abcagenda.png" alt="" />
                        <h3>PEDIDOS</h3>
                    </div>

                </div>


                <div className="espaco-2">

                    <nav>
                        <div>
                            <h2>Seja Bem-Vindo , Admin !!</h2>
                        </div>

                        <div className='usuario-p'>
                            <p>NOVOS DADOS</p>
                            <img className='usuario' src="/assets/image/usuario.png" alt="" />
                        </div>

                    </nav>

                <div className='d9'>
                 
                    <div className='d8'> 
                        <div className='input-4'>
                            <input type="text" placeholder='NOME DO PRODUTO' />
                            <input type="text" placeholder='CATEGORIA'/>
                            <input type="text" placeholder='VALOR DO PRODUTO'/>
                            <input type="text" placeholder='QUANTIDADE'/>
                        </div>

                        <div className='cinzaa'>
                            <div className='cinza'>
                                <img src="/assets/image/img-img.png" alt="" />
                             </div>

                             <div>
                                <button className='salvar'>SALVAR</button>
                             </div>

                        </div>

                        
                    </div>   {/* final da tag "d8" */} 
                      
                 <div className='consulta'>
                    
                 </div>

                </div> {/* final da tag "d9" */}

                </div>

            </div>





        </div>


    )
}