import './index.scss';
import Cabecalho from '../cabecalho';
import RodapePrd from '../rodape-produto';

export default function Produto(){
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
                <img className='imagi' src="/assets/image/filtro-1.png" alt="" />
                    <div className='line'></div>

                    <p className='txt'>FILTRO PARA PISCINA ATÉ 30.000 <br /> COM BOMBA 1/3 CV BIVOLT</p>

                    <h1 className='preco'>R$ 891,00</h1>

                    <section>            
                        
                        <p>FRETE GRÁTIS</p>
                        <img className='caminhao' src="/assets/image/caminhao.png" alt="" />
    
                    </section>
                    <a href="/filtro1"><button>COMPRAR AGORA</button></a>
                </div>

                <div className='abc'>
                <img className='imagi' src="/assets/image/filtro-2.png" alt="" />
                    <div className='line'></div>     
                    <p className='txt'>BOMBA DE FILTRAGEM P/ 1136 L/HR  <br /> 110V  BEL LAZER 174400</p>
                    

                    <h1 className='preco'>R$ 891,00</h1>

                    <section>            
                        
                    <p>FRETE GRÁTIS</p>
                    <img className='caminhao' src="/assets/image/caminhao.png" alt="" />

                    </section>
                    
                    <button>COMPRAR AGORA</button>
           </div>

                <div className='abc'>
                <img className='imagi' src="../assets/image/filtro-3.png" alt="" />
                    <div className='line'></div>  
                    <p className='txt'>PENEIRA SODRAMAR PUÇA COM <br /> ARMAÇÃO  BOMBA DE FILTRAGEM <br />2006L/H BEL 110V</p>

                    <h1 className='preco'>R$ 891,00</h1>

                    <section>            
                        
                        <p>FRETE GRÁTIS</p>
                        <img className='caminhao' src="/assets/image/caminhao.png" alt="" />
    
                    </section>

                    <a href="/filtro3"><button>COMPRAR AGORA</button></a>
              </div>

                <div className='abc'>
                <img className='imagi' src="/assets/image/filtro-4.png" alt="" />
                    <div className='line'></div>     
                    <p className='txt'>BOMBA DE FILTRAGEM 3028 <br /> L/HR 220V BEL</p>
                    

                    <h1 className='preco'>R$ 891,00</h1>
                    <section>            
                        
                        <p>FRETE GRÁTIS</p>
                        <img className='caminhao' src="/assets/image/caminhao.png" alt="" />
    
                        </section>
                    <button>COMPRAR AGORA</button>
           </div>

                <div className='abc'>
                <img className='imagi' src="/assets/image/filtro-5.png" alt="" />
                    <div className='line'></div>    
                    <p className='txt'>BOMBA FILTRANTE FILTRO PARA PISCINA<br />  2006 L/H 110V COM REFIL E MANGUEIRA</p>

                    <h1  className='preco'>R$ 891,00</h1>

                    <section>            
                        
                    <p>FRETE GRÁTIS</p>
                    <img className='caminhao' src="/assets/image/caminhao.png" alt="" />

                    </section>

                    <button>COMPRAR AGORA</button>
                 </div>

                <div className='abc'>
                <img className='imagi' src="/assets/image/filtro-6.png" alt="" />
                    <div className='line'></div> 

                    <p className='txt'>BOMBA FILTRO INTEX PARA  PISCINAS <br />DE 2.006 LITROS/HORA E 110V</p>

                    <h1 className='preco'>R$ 891,00</h1>

                    <section>            
                        
                    <p>FRETE GRÁTIS</p>
                    <img className='caminhao' src="/assets/image/caminhao.png" alt="" />

                    </section>

                    <button>COMPRAR AGORA</button>
                </div>

            </section>



</div>
                               <div className='fim'>
                                                    <RodapePrd/>
                                 </div>

        </div>
    )
}