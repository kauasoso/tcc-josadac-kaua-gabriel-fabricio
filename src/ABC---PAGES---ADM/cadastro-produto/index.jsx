import './index.scss';
import Cabecalho2 from '../../cabecalho2';
import Cabecalho from '../../cabecalho';
import { useState } from 'react';
import axios from 'axios'
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function CadastroProduto(){

const [nomeProduto, setNomeProduto] = useState ('');
const [codigoCategoria, setCodigoCategoria] = useState ('');
const [precoVenda , setPrecoVenda] = useState ('');
const [quantidadeEstoque, setQuantidadeEstoque]= useState ('');
const [codigoProduto, setCodigoProduto] = useState('')
const [erro , setErro] = useState([])

async function CadastroProduto () {

try {

const url = `http://localhost:5001/cadastroproduto`;
const produto = {
    nome : nomeProduto ,
    categoria: codigoCategoria,
    preco : precoVenda,
    estoque: quantidadeEstoque,
    codigo : codigoProduto
}


const r = await axios.post(url , produto)

toast.dark("✔️ Cadastrado Com Sucesso !")
} catch (err) {
    if(err.response.status === 400) {
        setErro(err.response.data.erro)
        toast.dark("🔒 Não Foi Possível Cadastrar")
    }
}

}



    return(
        <div className='maeeee'>
            <ToastContainer/>
             <Cabecalho2/>

            <div className='fundo'>

            <h1>CADASTRO DE PRODUTOS</h1>

                <div className='corpo'>
                    <div className='varios'>
                       <input type="text" placeholder='NOME DO PRODUTO' value={nomeProduto} onChange={e => setNomeProduto(e.target.value)} />
                       <input type="number" placeholder='CÓDIGO DA CATEGORIA' value={codigoCategoria} onChange={e => setCodigoCategoria(e.target.value)}/>
                       <input type="number" placeholder='PREÇO DE VENDA' value={precoVenda} onChange={e => setPrecoVenda(e.target.value)}/>
                       <input type="number" placeholder='QUANTIDADE EM ESTOQUE' value={quantidadeEstoque} onChange={e =>  setQuantidadeEstoque(e.target.value)}/>
                       <input type="number" placeholder='CÓDIGO DO PRODUTO' value={codigoProduto} onChange={e => setCodigoProduto (e.target.value)} />
                       <div style={{color:"red"}}>{erro}</div>
                  
                    </div>

                    <div className='imagem'>
                         <img className='nuvem' src="../assets/image/img-cadastro.png" alt="" />
                             <div className='linha'></div>
                             <h3 className='letras'>FAÇA O UPLOAD DA IMAGEM OU <br /> ARRASTE AQUI</h3>
                               <button className='baix'> <img className='baixar' src="../assets/image/dowload-cadastro-img.png" alt="" /></button>
                    </div>
                   
                </div>

                                    <div className='cc'><button className='salvar' onClick={CadastroProduto}>SALVAR</button>  </div>

                                    <div className='rodape'> copyright 2023 POOL MAX | Todos Os Direitos Reservados | Desenvolvido por JKGF</div>
                
                
            </div>

           

        </div>


    )
}