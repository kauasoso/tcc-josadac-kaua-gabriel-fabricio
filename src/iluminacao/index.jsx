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
    <h1 className='prd'>ILUMINAÇÃO</h1>

    <nav>
            <h3>Filtros :</h3>
    <select name="" id="filtro">
        <option>+FILTROS</option>
    </select>
    </nav>
    </div>

        <section className='divis'>

            <div className='abc'>
            <img className='imagi' src="/assets/image/ilu-1.png" alt="" />
                <div className='line'>ㅤㅤ</div>

                <p className='txt'>REFLETOR GLOBAL</p>

                <h1 className='preco'>R$320,00</h1>

                <section>            
                    
                    <p>FRETE GRÁTIS</p>
                    <img className='caminhao' src="/assets/image/caminhao.png" alt="" />

                </section>
                <a href="/ilu1"><button>COMPRAR AGORA</button></a>
            </div>

            <div className='abc'>
            <img className='imagi' src="/assets/image/ilu-2.png" alt="" />
                <div className='line'>ㅤ</div>     
                <p className='txt'>REFLETOR R125</p>
                

                <h1 className='preco'>R$ 345,90</h1>

                <section>            
                    
                <p>FRETE GRÁTIS</p>
                <img className='caminhao' src="/assets/image/caminhao.png" alt="" />

                </section>
                
                <a href="/ilu2"><button>COMPRAR AGORA</button></a>
       </div>

            <div className='abc'>
            <img className='imagi' src="/assets/image/ilu-3.png" alt="" />
                <div className='line'>ㅤ</div>  
                <p className='txt'>REFLETOR SUPER LED'S G</p>

                <h1 className='preco'>R$390,00</h1>

                <section>            
                    
                    <p>FRETE GRÁTIS</p>
                    <img className='caminhao' src="/assets/image/caminhao.png" alt="" />

                </section>

                <a href="/ilu3"><button>COMPRAR AGORA</button></a>
          </div>

            <div className='abc'>
            <img className='imagi' src="/assets/image/ilu-4.png" alt="" />
                <div className='line'>ㅤ</div>     
                <p className='txt'>REFLETOR SUPER SMD G</p>
                

                <h1 className='preco'>R$330,00</h1>
                <section>            
                    
                    <p>FRETE GRÁTIS</p>
                    <img className='caminhao' src="/assets/image/caminhao.png" alt="" />

                    </section>
                    <a href="/ilu4"><button>COMPRAR AGORA</button></a>
       </div>

            <div className='abc'>
            <img className='imagi' src="/assets/image/ilu-5.png" alt="" />
                <div className='line'>ㅤ</div>    
                <p className='txt'>REFLETOR SLIM LED'S</p>

                <h1  className='preco'>R$150,00</h1>

                <section>            
                    
                <p>FRETE GRÁTIS</p>
                <img className='caminhao' src="/assets/image/caminhao.png" alt="" />

                </section>

                <a href="/ilu5"><button>COMPRAR AGORA</button></a>
             </div>

            <div className='abc'>
            <img className='imagi' src="/assets/image/ilu-6.png" alt="" />
                <div className='line'>ㅤ</div> 

                <p className='txt'>REFLETOR SMALL LED'S EM INOX DE 1/2</p>

                <h1 className='preco'>R$185,00</h1>

                <section>            
                    
                <p>FRETE GRÁTIS</p>
                <img className='caminhao' src="/assets/image/caminhao.png" alt="" />

                </section>

                <a href="/ilu6"> <button>COMPRAR AGORA</button></a>
            </div>

        </section>



</div>
                           <div className='fim'> <Rodape/></div>

    </div>
    )
    }


