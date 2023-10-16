import Cabecalho from '../cabecalho'
import Rodape from '../rodape'
import './index.scss'

export default function Iluminacao(){


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
            <img className='imagi' src="/assets/images/ilu-1.png" alt="" />
                <div className='line'></div>

                <p className='txt'>REFLETOR GLOBAL</p>

                <h1 className='preco'>R$320,00</h1>

                <section>            
                    
                    <p>FRETE GRÁTIS</p>
                    <img className='caminhao' src="/assets/images/caminhao.png" alt="" />

                </section>
                <button>COMPRAR AGORA</button>
            </div>

            <div className='abc'>
            <img className='imagi' src="/assets/images/ilu-2.png" alt="" />
                <div className='line'></div>     
                <p className='txt'>REFLETOR R125</p>
                

                <h1 className='preco'>R$ 345,90</h1>

                <section>            
                    
                <p>FRETE GRÁTIS</p>
                <img className='caminhao' src="/assets/images/caminhao.png" alt="" />

                </section>
                
                <button>COMPRAR AGORA</button>
       </div>

            <div className='abc'>
            <img className='imagi' src="/assets/images/ilu-3.png" alt="" />
                <div className='line'></div>  
                <p className='txt'>REFLETOR SUPER LED'S G</p>

                <h1 className='preco'>R$390,00</h1>

                <section>            
                    
                    <p>FRETE GRÁTIS</p>
                    <img className='caminhao' src="/assets/images/caminhao.png" alt="" />

                </section>

                <button>COMPRAR AGORA</button>
          </div>

            <div className='abc'>
            <img className='imagi' src="/assets/images/ilu-4.png" alt="" />
                <div className='line'></div>     
                <p className='txt'>REFLETOR SUPER SMD G</p>
                

                <h1 className='preco'>R$330,00</h1>
                <section>            
                    
                    <p>FRETE GRÁTIS</p>
                    <img className='caminhao' src="/assets/images/caminhao.png" alt="" />

                    </section>
                <button>COMPRAR AGORA</button>
       </div>

            <div className='abc'>
            <img className='imagi' src="/assets/images/ilu-5.png" alt="" />
                <div className='line'></div>    
                <p className='txt'>REFLETOR SLIM LED'S</p>

                <h1  className='preco'>R$150,00</h1>

                <section>            
                    
                <p>FRETE GRÁTIS</p>
                <img className='caminhao' src="/assets/images/caminhao.png" alt="" />

                </section>

                <button>COMPRAR AGORA</button>
             </div>

            <div className='abc'>
            <img className='imagi' src="/assets/images/ilu-6.png" alt="" />
                <div className='line'></div> 

                <p className='txt'>REFLETOR SMALL LED'S EM INOX DE 1/2</p>

                <h1 className='preco'>R$185,00</h1>

                <section>            
                    
                <p>FRETE GRÁTIS</p>
                <img className='caminhao' src="/assets/images/caminhao.png" alt="" />

                </section>

                <button>COMPRAR AGORA</button>
            </div>

        </section>



</div>
                           <div className='fim'> <Rodape/></div>

    </div>
    )
    }


