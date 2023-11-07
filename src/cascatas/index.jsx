import Cabecalho from '../cabecalho'
import Rodape from '../rodape'
import './index.scss'





export default function Cascatas() {





    return (




        <div className='mae'>
            <div>
                <Cabecalho />
            </div>
            <div className='tudo'>
                <div className='centralizar'>
                    <h1 className='prd'>CASCATS & DUCHAS</h1>

                    <nav>
                        <h3>Filtros :</h3>
                        <select name="" id="filtro">
                            <option>+FILTROS</option>
                        </select>
                    </nav>
                </div>

                <section className='divis'>

                    <div className='abc'>
                        <img className='imagi' src="/assets/image/casca-1.png" alt="" />
                        <div className='line'>ㅤ</div>

                        <p className='txt'>CASCATA EM AÇO INOX</p>

                        <h1 className='preco'>R$ 4.354,87</h1>

                        <section>

                            <p>FRETE GRÁTIS</p>
                            <img className='caminhao' src="/assets/image/caminhao.png" alt="" />

                        </section>
                        <nav className='botao'>

                        <a href="/cas1"><button>COMPRAR AGORA</button></a>

                            <a href="/pedido">
                                <img src="./assets/image/carropaypal.png" alt="" height={35} />
                            </a>

                        </nav>            </div>

                    <div className='abc'>
                        <img className='imagi' src="/assets/image/casca-2.png" alt="" />
                        <div className='line'>ㅤ</div>
                        <p className='txt'>CASCATA CISNE EM AÇO INOX</p>


                        <h1 className='preco'>R$ 5.231,256</h1>

                        <section>

                            <p>FRETE GRÁTIS</p>
                            <img className='caminhao' src="/assets/image/caminhao.png" alt="" />

                        </section>

                        <nav className='botao'>

                        <a href="/cas2"><button>COMPRAR AGORA</button></a>

                            <a href="/pedido">
                                <img src="./assets/image/carropaypal.png" alt="" height={35} />
                            </a>

                        </nav>       </div>

                    <div className='abc'>
                        <img className='imagi' src="/assets/image/casca-3.png" alt="" />
                        <div className='line'>ㅤ</div>
                        <p className='txt'>CASCATA IMPERIS  EM AÇO</p>

                        <h1 className='preco'>R$ 2.432,46</h1>

                        <section>

                            <p>FRETE GRÁTIS</p>
                            <img className='caminhao' src="/assets/image/caminhao.png" alt="" />

                        </section>

                        <nav className='botao'>

                        <a href="/cas3"><button>COMPRAR AGORA</button></a>

                            <a href="/pedido">
                                <img src="./assets/image/carropaypal.png" alt="" height={35} />
                            </a>

                        </nav>          </div>

                    <div className='abc'>
                        <img className='imagi' src="/assets/image/casca-4.png" alt="" />
                        <div className='line'>ㅤ</div>
                        <p className='txt'>DUCHA FRIA REDONDA DE ALUMÍNIO</p>


                        <h1 className='preco'>R$ 867,43</h1>
                        <section>

                            <p>FRETE GRÁTIS</p>
                            <img className='caminhao' src="/assets/image/caminhao.png" alt="" />

                        </section>
                        <nav className='botao'>

                        <a href="/cas4"><button>COMPRAR AGORA</button></a>

                            <a href="/pedido">
                                <img src="./assets/image/carropaypal.png" alt="" height={35} />
                            </a>

                        </nav>       </div>

                    <div className='abc'>
                        <img className='imagi' src="/assets/image/casca-5.png" alt="" />
                        <div className='line'>ㅤ</div>
                        <p className='txt'>DUCHA FRIA QUADRADA ALUMÍNIO</p>

                        <h1 className='preco'>R$ 5.110,42</h1>

                        <section>

                            <p>FRETE GRÁTIS</p>
                            <img className='caminhao' src="/assets/image/caminhao.png" alt="" />

                        </section>

                        <nav className='botao'>

                        <a href="/cas5"><button>COMPRAR AGORA</button></a>

                            <a href="/pedido">
                                <img src="./assets/image/carropaypal.png" alt="" height={35} />
                            </a>

                        </nav>             </div>

                    <div className='abc'>
                        <img className='imagi' src="/assets/image/casca-6.png" alt="" />
                        <div className='line'>ㅤ</div>

                        <p className='txt'>DUCHA QUENTE QUADRADA</p>

                        <h1 className='preco'>R$ 758,33</h1>

                        <section>

                            <p>FRETE GRÁTIS</p>
                            <img className='caminhao' src="/assets/image/caminhao.png" alt="" />

                        </section>

                        <nav className='botao'>

                        <a href="/cas6"><button>COMPRAR AGORA</button></a>

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