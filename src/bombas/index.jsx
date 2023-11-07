import Cabecalho from '../cabecalho'
import Rodape from '../rodape'
import './index.scss'




export default function Bombas() {


    return (





        <div className='mae'>
            <div>
                <Cabecalho />
            </div>
            <div className='tudo'>
                <div className='centralizar'>
                    <h1 className='prd'>BOMBAS</h1>

                    <nav>
                        <h3>Filtros :</h3>
                        <select name="" id="filtro">
                            <option>+FILTROS</option>
                        </select>
                    </nav>
                </div>

                <section className='divis'>



                    <div className='abc'>
                        <img className='imagi' src="/assets/image/bomba-1.png" alt="" />
                        <div className='line'>ㅤ</div>
                        <p className='txt'>BOMBA FILTRANTE PISCINA INFLÁVEL<br /> 9463 L/H BESTWAY FILTRO 220</p>


                        <h1 className='preco'>R$ 2.321,91</h1>
                        <section>

                            <p>FRETE GRÁTIS</p>
                            <img className='caminhao' src="/assets/image/caminhao.png" alt="" />

                        </section>
                        <nav className='botao'>

                        <a href="/bomb1"><button>COMPRAR AGORA</button></a>

                            <a href="/pedido">
                                <img src="./assets/image/carropaypal.png" alt="" height={35} />
                            </a>

                        </nav>       </div>

                    <div className='abc'>
                        <img className='imagi' src="/assets/image/bomba-2.png" alt="" />
                        <div className='line'>ㅤ</div>
                        <p className='txt'>FILTRO SEM AREIA E BOMBA COM<br />CARRINHO </p>

                        <h1 className='preco'>R$ 7.543.99</h1>

                        <section>

                            <p>FRETE GRÁTIS</p>
                            <img className='caminhao' src="/assets/image/caminhao.png" alt="" />

                        </section>

                        <nav className='botao'>

                        <a href="/bomb2"><button>COMPRAR AGORA</button></a>

                            <a href="/pedido">
                                <img src="./assets/image/carropaypal.png" alt="" height={35} />
                            </a>

                        </nav>             </div>

                    <div className='abc'>
                        <img className='imagi' src="/assets/image/bomba-3.png" alt="" />
                        <div className='line'>ㅤ</div>

                        <p className='txt'>KIT BOMBA E FILTRO NAUTILUS<br /> F450P + 1/2 CV MONOFÁSICA</p>

                        <h1 className='preco'>R$ 4.186,09</h1>

                        <section>

                            <p>FRETE GRÁTIS</p>
                            <img className='caminhao' src="/assets/image/caminhao.png" alt="" />

                        </section>

                        <nav className='botao'>

                        <a href="/bomb3"><button>COMPRAR AGORA</button></a>

                            <a href="/pedido">
                                <img src="./assets/image/carropaypal.png" alt="" height={35} />
                            </a>

                        </nav>            </div>

                </section>



            </div>
            <div className='fim'><Rodape /></div>

        </div>
    )
}