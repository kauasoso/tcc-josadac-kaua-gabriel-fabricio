import './index.scss';
import Cabecalho2 from '../../cabecalho2';
import Cabecalho from '../../cabecalho';

export default function CadastroProduto(){
    return(
        <div className='maeeee'>
             <Cabecalho2/>

            <div className='fundo'>

            <h1>CADASTRO DE PRODUTOS</h1>

                <div className='corpo'>
                    <div className='varios'>
                       <input type="text" placeholder='NOME DO NOVO PRODUTO' />
                       <input type="number" placeholder='CÓDIGO DO PRODUTO'/>
                       <input type="number" placeholder='PREÇO DE VENDA'/>
                       <input type="number" placeholder='QUANTIDADE'/>
                    </div>

                    <div className='imagem'>
                         <img className='nuvem' src="../assets/image/img-cadastro.png" alt="" />
                             <div className='linha'></div>
                             <h3 className='letras'>FAÇA O UPLOAD DA IMAGEM OU <br /> ARRASTE AQUI</h3>
                               <button className='baix'> <img className='baixar' src="../assets/image/dowload-cadastro-img.png" alt="" /></button>
                    </div>
                </div>

                                    <div className='cc'><button className='salvar'>SALVAR</button>  </div>

                                    <div className='rodape'> copyright 2023 POOL MAX | Todos Os Direitos Reservados | Desenvolvido por JKGF</div>
                
                
            </div>

           

        </div>


    )
}