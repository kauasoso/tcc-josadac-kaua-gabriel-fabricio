import Cabecalho from '../cabecalho'
import Rodape from '../rodape'
import './index.scss'





export default function Bordas() {






    return (



        <div className='mae'>
            <div>
                <Cabecalho />
            </div>
            <div className='tudo'>
                <div className='centralizar'>
                    <h1 className='prd'>BORDAS</h1>

                    <nav>
                        <h3>Filtros :</h3>
                        <select name="" id="filtro">
                            <option>+FILTROS</option>
                        </select>
                    </nav>
                </div>

                <section className='divis'>

                    <div className='abc'>
                        <img className='imagi' src="/assets/image/bordas-1.png" alt="" />
                        <div className='line'>ㅤ</div>

                        <p className='txt'>BORDA CERÂMICA GRANILHADA 216G</p>

                        <h1 className='preco'>R$ 287,13</h1>

                        <section>

                            <p>FRETE GRÁTIS</p>
                            <img className='caminhao' src="/assets/image/caminhao.png" alt="" />

                        </section>
                        <nav className='botao'>

                        <a href="/borda1"><button>COMPRAR AGORA</button></a>

                            <a href="/pedido">
                                <img src="./assets/image/carropaypal.png" alt="" height={35} />
                            </a>

                        </nav>            </div>

                    <div className='abc'>
                        <img className='imagi' src="/assets/image/bordas-2.png" alt="" />
                        <div className='line'>ㅤ</div>
                        <p className='txt'>BORDA CERÂMICA GRANILHADA 296G</p>


                        <h1 className='preco'>R$ 307,00</h1>

                        <section>

                            <p>FRETE GRÁTIS</p>
                            <img className='caminhao' src="/assets/image/caminhao.png" alt="" />

                        </section>

                        <nav className='botao'>

                        <a href="/borda2"><button>COMPRAR AGORA</button></a>

                            <a href="/pedido">
                                <img src="./assets/image/carropaypal.png" alt="" height={35} />
                            </a>

                        </nav>       </div>

                    <div className='abc'>
                        <img className='imagi' src="/assets/image/bordas-3.png" alt="" />
                        <div className='line'>ㅤ</div>
                        <p className='txt'>BORDA GRADARA</p>

                        <h1 className='preco'>R$ 202,99</h1>

                        <section>

                            <p>FRETE GRÁTIS</p>
                            <img className='caminhao' src="/assets/image/caminhao.png" alt="" />

                        </section>

                        <a className='ahome' href="/borda3"><button>COMPRAR AGORA</button></a>
                    </div>

                    <div className='abc'>
                        <img className='imagi' src="/assets/image/bordas-4.png" alt="" />
                        <div className='line'>ㅤ</div>
                        <p className='txt'>BORDA PALLADIO</p>


                        <h1 className='preco'>R$ 103,33</h1>
                        <section>

                            <p>FRETE GRÁTIS</p>
                            <img className='caminhao' src="/assets/image/caminhao.png" alt="" />

                        </section>
                        <nav className='botao'>

                        <a href="/borda4"><button>COMPRAR AGORA</button></a>

                            <a href="/pedido">
                                <img src="./assets/image/carropaypal.png" alt="" height={35} />
                            </a>

                        </nav>       </div>

                    <div className='abc'>
                        <img className='imagi' src="/assets/image/bordas-5.png" alt="" />
                        <div className='line'>ㅤ</div>
                        <p className='txt'>CANTONEIRA EXTERNA AZUL CELESTE</p>

                        <h1 className='preco'>R$ 266,00</h1>

                        <section>

                            <p>FRETE GRÁTIS</p>
                            <img className='caminhao' src="/assets/image/caminhao.png" alt="" />

                        </section>

                        <nav className='botao'>

                        <a href="/borda5"><button>COMPRAR AGORA</button></a>

                            <a href="/pedido">
                                <img src="./assets/image/carropaypal.png" alt="" height={35} />
                            </a>

                        </nav>             </div>

                    <div className='abc'>
                        <img className='imagi' src="/assets/image/bordas-6.png" alt="" />
                        <div className='line'>ㅤ</div>

                        <p className='txt'>CANTONEIRA EXTERNA AZUL COBALTO</p>

                        <h1 className='preco'>R$ 543,21</h1>

                        <section>

                            <p>FRETE GRÁTIS</p>
                            <img className='caminhao' src="/assets/image/caminhao.png" alt="" />

                        </section>

                        <nav className='botao'>

                        <a href="/borda6"> <button>COMPRAR AGORA</button></a>

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