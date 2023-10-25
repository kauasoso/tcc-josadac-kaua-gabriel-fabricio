import Cabecalho from '../cabecalho'
import Rodape from '../rodape'
import './index.scss'




export default function Aspiradores(){




    return(

        <div className='mae'>
        <div>
            <Cabecalho/>
        </div>
<div className='tudo'>
    <div className='centralizar'>
    <h1 className='prd'>PRODUTOS</h1>

    <nav>
            <h3>Filtros :</h3>
    <select name="" id="filtro">
        <option>+FILTROS</option>
    </select>
    </nav>
    </div>

        <section className='divis'>

           

            <div className='abc'>
            <img className='imagi' src="/assets/image/aspi-1.png" alt="" />
                <div className='line'></div>     
                <p className='txt'>ASPIRADOR SANDSHARK</p>
                

                <h1 className='preco'>R$ 5452,00</h1>
                <section>            
                    
                    <p>FRETE GRÁTIS</p>
                    <img className='caminhao' src="/assets/image/caminhao.png" alt="" />

                    </section>
                <button>COMPRAR AGORA</button>
       </div>

            <div className='abc'>
            <img className='imagi' src="/assets/image/aspi-2.png" alt="" />
                <div className='line'></div>    
                <p className='txt'>ROBÔ DOLPHIN XT5</p>

                <h1  className='preco'>R$ 4987,00</h1>

                <section>            
                    
                <p>FRETE GRÁTIS</p>
                <img className='caminhao' src="/assets/image/caminhao.png" alt="" />

                </section>

                <button>COMPRAR AGORA</button>
             </div>

            <div className='abc'>
            <img className='imagi' src="/assets/image/aspi-3.png" alt="" />
                <div className='line'></div> 

                <p className='txt'>AQUECEDOR A GÁS HTR400</p>

                <h1 className='preco'>R$ 3490,00</h1>

                <section>            
                    
                <p>FRETE GRÁTIS</p>
                <img className='caminhao' src="/assets/image/caminhao.png" alt="" />

                </section>

                <button>COMPRAR AGORA</button>
            </div>

        </section>



</div>
                           <div className='fim'><Rodape/></div>

    </div>
    )
}