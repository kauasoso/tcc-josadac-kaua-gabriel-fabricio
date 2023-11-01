import './index.scss';
import Rodape from '../rodape';
import Cabecalho from '../cabecalho';


export default function Limpeza(){

    return(
        <div className='mae'>
        <div>
           <Cabecalho/>
        </div>
<div className='tudo'>
    <div className='centralizar'>
    <h1 className='prd'>LIMPEZA</h1>

    <nav>
            <h3>Filtros :</h3>
    <select name="" id="filtro">
        <option>+FILTROS</option>
    </select>
    </nav>
    </div>

        <section className='divis'>

            <div className='abc'>
            <img className='imagi' src="/assets/image/limpeza1.png" alt="" />
                <div className='line'>ㅤ</div>

                <p className='txt'>SOLUÇÃO PARA ÁGUA TURVA HTH - 1 LITRO</p>

                <h1 className='preco'>R$70,65</h1>

                <section>            
                    
                    <p>FRETE GRÁTIS</p>
                    <img className='caminhao' src="/assets/image/caminhao.png" alt="" />

                </section>
                <a className='ahome' href="/limp1"><button>COMPRAR AGORA</button></a>
            </div>

            <div className='abc'>
            <img className='imagi' src="/assets/image/limpeza2.png" alt="" />
                <div className='line'>ㅤ</div>     
                <p className='txt'>LIMPA BORDAS HTH - 1 LITRO</p>
                

                <h1 className='preco'>R$ 21,40</h1>

                <section>            
                    
                <p>FRETE GRÁTIS</p>
                <img className='caminhao' src="/assets/image/caminhao.png" alt="" />

                </section>
                
                <a className='ahome' href="/limp2"><button>COMPRAR AGORA</button></a>
       </div>

            <div className='abc'>
            <img className='imagi' src="/assets/image/limpeza3.png" alt="" />
                <div className='line'>ㅤ</div>  
                <p className='txt'>ELEVADOR DE ALCALINIDADE E CONTROLE  DE PH HTH SACO 2KG</p>

                <h1 className='preco'>R$ 90,26</h1>

                <section>            
                    
                    <p>FRETE GRÁTIS</p>
                    <img className='caminhao' src="/assets/image/caminhao.png" alt="" />

                </section>

                <a className='ahome' href="/limp3"><button>COMPRAR AGORA</button></a>
          </div>

            <div className='abc'>
            <img className='imagi' src="/assets/image/limpeza4.png" alt="" />
                <div className='line'>ㅤ</div>     
                <p className='txt'>REDUTOR DE ALCALINIDADE E PH EXTRA FORTE 1 LITRO HTH </p>
                

                <h1 className='preco'>R$ 30,40</h1>
                <section>            
                    
                    <p>FRETE GRÁTIS</p>
                    <img className='caminhao' src="/assets/image/caminhao.png" alt="" />

                    </section>
                    <a className='ahome' href="/limp4"><button>COMPRAR AGORA</button></a>
       </div>

            <div className='abc'>
            <img className='imagi' src="/assets/image/limpeza5.png" alt="" />
                <div className='line'>ㅤ</div>    
                <p className='txt'>BARRILHA LEVE ELEVADOR DE PH EM PÓ SACO 1.5K HTH</p>

                <h1  className='preco'>R$ 76,99</h1>

                <section>            
                    
                <p>FRETE GRÁTIS</p>
                <img className='caminhao' src="/assets/image/caminhao.png" alt="" />

                </section>

                <a className='ahome' href="/limp5"><button>COMPRAR AGORA</button></a>
             </div>

            <div className='abc'>
            <img className='imagi' src="/assets/image/limpeza6.png" alt="" />
                <div className='line'>ㅤ</div> 

                <p className='txt'>FLUTUADOR CLORO HTH TABLETE ADVANCED 4 EM 1 - 1,660KG HTH</p>

                <h1 className='preco'>R$ 64,01</h1>

                <section>            
                    
                <p>FRETE GRÁTIS</p>
                <img className='caminhao' src="/assets/image/caminhao.png" alt="" />

                </section>

                <a className='ahome' href="/limp6"><button>COMPRAR AGORA</button></a>
            </div>

        </section>



</div>
                           <div className='fim'> <Rodape/></div>

    </div>
    )
}