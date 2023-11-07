import Cabecalho from '../cabecalho'
import Rodape from '../rodape'
import './index.scss'





export default function Aquecimentos() {






    return (




        <div className='mae'>
            <div>
                <Cabecalho />
            </div>
            <div className='tudo'>
                <div className='centralizar'>
                    <h1 className='prd'>AQUECIMETO</h1>

                    <nav>
                        <h3>Filtros :</h3>
                        <select name="" id="filtro">
                            <option>+FILTROS</option>
                        </select>
                    </nav>
                </div>

                <section className='divis'>

                    <div className='abc'>
                        <img className='imagi' src="/assets/image/aqu1.png" alt="" />
                        <div className='line'>ㅤ</div>

                        <p className='txt'>AQUECEDOR A GÁS HTR400</p>

                        <h1 className='preco'>R$ 40.216,13</h1>

                        <section>

                            <p>FRETE GRÁTIS</p>
                            <img className='caminhao' src="/assets/image/caminhao.png" alt="" />

                        </section>
                        <nav className='botao'>

                        <a href="/aq1"><button>COMPRAR AGORA</button> </a>

                            <a href="/pedido">
                                <img src="./assets/image/carropaypal.png" alt="" height={35} />
                            </a>

                        </nav>            </div>

                    <div className='abc'>
                        <img className='imagi' src="/assets/image/aqu2.png" alt="" />
                        <div className='line'>ㅤ</div>
                        <p className='txt'>CAPA TÉRMICA</p>


                        <h1 className='preco'>R$ 387,00</h1>

                        <section>

                            <p>FRETE GRÁTIS</p>
                            <img className='caminhao' src="/assets/image/caminhao.png" alt="" />

                        </section>

                        <nav className='botao'>

                        <a href="/aq2"><button>COMPRAR AGORA</button></a>

                            <a href="/pedido">
                                <img src="./assets/image/carropaypal.png" alt="" height={35} />
                            </a>

                        </nav>       </div>

                    <div className='abc'>
                        <img className='imagi' src="/assets/image/aquecedor-3.png" alt="" />
                        <div className='line'></div>
                        <p className='txt'>PLACA SOLAR GIRASSOL ENCAPSULADA</p>

                        <h1 className='preco'>R$ 782,46</h1>

                        <section>

                            <p>FRETE GRÁTIS</p>
                            <img className='caminhao' src="/assets/image/caminhao.png" alt="" />

                        </section>

                        <nav className='botao'>

                        <a href="/aq3"><button>COMPRAR AGORA</button></a>

                            <a href="/pedido">
                                <img src="./assets/image/carropaypal.png" alt="" height={35} />
                            </a>

                        </nav>          </div>

                    <div className='abc'>
                        <img className='imagi' src="/assets/image/aquecedor-4.png" alt="" />
                        <div className='line'>ㅤ</div>
                        <p className='txt'>CAPA TÉRMICA SOL +GUARD</p>


                        <h1 className='preco'>R$ 403,53</h1>
                        <section>

                            <p>FRETE GRÁTIS</p>
                            <img className='caminhao' src="/assets/image/caminhao.png" alt="" />

                        </section>
                        <nav className='botao'>

                        <a href="/aq4"><button>COMPRAR AGORA</button></a>

                            <a href="/pedido">
                                <img src="./assets/image/carropaypal.png" alt="" height={35} />
                            </a>

                        </nav>       </div>

                    <div className='abc'>
                        <img className='imagi' src="/assets/image/aquecedor-5.png" alt="" />
                        <div className='line'>ㅤ</div>
                        <p className='txt'>PLACA SOLAR ESTEIRA</p>

                        <h1 className='preco'>R$ 1246,00</h1>

                        <section>

                            <p>FRETE GRÁTIS</p>
                            <img className='caminhao' src="/assets/image/caminhao.png" alt="" />

                        </section>

                        <nav className='botao'>

                        <a href="/aq5"><button>COMPRAR AGORA</button></a>

                            <a href="/pedido">
                                <img src="./assets/image/carropaypal.png" alt="" height={35} />
                            </a>

                        </nav>             </div>

                    <div className='abc'>
                        <img className='imagi' src="/assets/image/aquecedor-6.png" alt="" />
                        <div className='line'>ㅤ</div>

                        <p className='txt'>PLACA SOLAR GIRASSOL G1</p>

                        <h1 className='preco'>R$ 668,33</h1>

                        <section>

                            <p>FRETE GRÁTIS</p>
                            <img className='caminhao' src="/assets/image/caminhao.png" alt="" />

                        </section>

                        <nav className='botao'>

                        <a href="/aq6"><button>COMPRAR AGORA</button></a>

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