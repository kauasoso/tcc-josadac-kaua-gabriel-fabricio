import Cabecalho from '../cabecalho'
import Rodape from '../rodape'
import './index.scss'




export default function Acessorios() {





    return (





        <div className='mae'>
            <div>
                <Cabecalho />
            </div>
            <div className='tudo'>
                <div className='centralizar'>
                    <h1 className='prd'>ACESSÓRIOS</h1>

                    <nav>
                        <h3>Filtros :</h3>
                        <select name="" id="filtro">
                            <option>+FILTROS</option>
                        </select>
                    </nav>
                </div>

                <section className='divis'>

                    <div className='abc'>
                        <img className='imagi' src="/assets/image/acessorio-1.png" alt="" />
                        <div className='line'>ㅤ</div>

                        <p className='txt'>TAMPA FECHAMENTO AUTOMÁTICO <br /> SODRAMAR</p>

                        <h1 className='preco'>R$50,40</h1>

                        <section>

                            <p>FRETE GRÁTIS</p>
                            <img className='caminhao' src="/assets/image/caminhao.png" alt="" />

                        </section>
                        <nav className='botao'>

                        <a href="/ace1"><button>COMPRAR AGORA</button></a>

                            <a href="/pedido">
                                <img src="./assets/image/carropaypal.png" alt="" height={35} />
                            </a>

                        </nav>
                    </div>

                    <div className='abc'>
                        <img className='imagi' src="/assets/image/acessorio-2.png" alt="" />
                        <div className='line'>ㅤ</div>
                        <p className='txt'>RALO SODRAMAR QUEBRA ONDA PRATIC<br /> ROSCA LATÃO ALVENARIA</p>


                        <h1 className='preco'>R$ 76,50</h1>

                        <section>

                            <p>FRETE GRÁTIS</p>
                            <img className='caminhao' src="/assets/image/caminhao.png" alt="" />

                        </section>

                        <nav className='botao'>

                        <a href="/ace2"><button>COMPRAR AGORA</button></a>

                            <a href="/pedido">
                                <img src="./assets/image/carropaypal.png" alt="" height={35} />
                            </a>

                        </nav> </div>

                    <div className='abc'>
                        <img className='imagi' src="/assets/image/acessorio-3.png" alt="" />
                        <div className='line'>ㅤ</div>
                        <p className='txt'>PENEIRA SODRAMAR TIPO PUÇA COM <br /> ARMAÇÃO METÁLICA</p>

                        <h1 className='preco'>R$ 35,10</h1>

                        <section>

                            <p>FRETE GRÁTIS</p>
                            <img className='caminhao' src="/assets/image/caminhao.png" alt="" />

                        </section>

                        <nav className='botao'>

                        <a href="/ace3"><button>COMPRAR AGORA</button></a>

                            <a href="/pedido">
                                <img src="./assets/image/carropaypal.png" alt="" height={35} />
                            </a>

                        </nav>
                    </div>

                    <div className='abc'>
                        <img className='imagi' src="/assets/image/acessorio-4.png" alt="" />
                        <div className='line'>ㅤ</div>
                        <p className='txt'>DISPOSITIVO RETORNO SODRAMAR 1.1/2''<br /> LATÃO INOX</p>


                        <h1 className='preco'>R$ 74,70</h1>
                        <section>

                            <p>FRETE GRÁTIS</p>
                            <img className='caminhao' src="/assets/image/caminhao.png" alt="" />

                        </section>
                        <nav className='botao'>

                        <a href="/ace4"><button>COMPRAR AGORA</button></a>

                            <a href="/pedido">
                                <img src="./assets/image/carropaypal.png" alt="" height={35} />
                            </a>

                        </nav>
                    </div>

                    <div className='abc'>
                        <img className='imagi' src="/assets/image/acessorio-5.png" alt="" />
                        <div className='line'>ㅤ</div>
                        <p className='txt'>DRENO SODRAMAR ANTI- TURBILHÃO 1.1/2" <br /> BASE LATÃO</p>

                        <h1 className='preco'>R$ 432,90</h1>

                        <section>

                            <p>FRETE GRÁTIS</p>
                            <img className='caminhao' src="/assets/image/caminhao.png" alt="" />

                        </section>

                        <nav className='botao'>

                        <a href="/ace5"><button>COMPRAR AGORA</button></a>

                            <a href="/pedido">
                                <img src="./assets/image/carropaypal.png" alt="" height={35} />
                            </a>

                        </nav>
                    </div>

                    <div className='abc'>
                        <img className='imagi' src="/assets/image/acessorio-6.png" alt="" />
                        <div className='line'>ㅤ</div>

                        <p className='txt'>Escova Sodramar Luxo Nylon 44cm</p>

                        <h1 className='preco'>R$ 40,50</h1>

                        <section>

                            <p>FRETE GRÁTIS</p>
                            <img className='caminhao' src="/assets/image/caminhao.png" alt="" />

                        </section>

                        <nav className='botao'>

                        <a href="/ace6"><button>COMPRAR AGORA</button></a>

                            <a href="/pedido">
                                <img src="./assets/image/carropaypal.png" alt="" height={35} />
                            </a>

                        </nav>            </div>

                </section>



            </div>
            <div className='fim'> <Rodape /></div>

        </div>
    )
}