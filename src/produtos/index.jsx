import './index.scss';
import Cabecalho from '../cabecalho';
import Rodape from '../rodape';

export default function Produto() {
    return (
        <div className='mae'>
            <div>
                <Cabecalho />
            </div>
            <div className='tudo'>
                <div className='centralizar'>
                    <h1 className='prd'>FILTROS</h1>


                    <nav>
                        <h3>Filtros :</h3>
                        <select name="" id="filtro">
                            <option>+FILTROS</option>
                        </select>
                    </nav>


                </div>

                <section className='divis'>


                    <div className='coluna'>

                        <section className='cima'>






                            <div className='abc'>
                                <img className='imagi' src="/assets/image/filtro-1.png" alt="" />
                                <div className='line'>ㅤ</div>

                                <p className='txt'>FILTRO PARA PISCINA ATÉ 30.000 COM BOMBA <br /> 1/3 CV BIVOLT</p>

                                <h1 className='preco'>R$ 891,00</h1>

                                <section>

                                    <p>FRETE GRÁTIS</p>
                                    <img className='caminhao' src="/assets/image/caminhao.png" alt="" />

                                </section>

                                <nav className='botao'>

                                <a href="/filtro1"><button>COMPRAR AGORA</button></a>

                                    <a href="/pedido">
                                        <img src="./assets/image/carropaypal.png" alt="" height={35} />
                                    </a>

                                </nav>

                            </div>

                            <div className='abc'>
                                <img className='imagi' src="/assets/image/filtro-2.png" alt="" />
                                <div className='line'>ㅤ</div>
                                <p className='txt'>BOMBA DE FILTRAGEM P/ 1136 L/HR 110V <br /> BEL LAZER 174400</p>


                                <h1 className='preco'>R$ 253,78</h1>

                                <section>

                                    <p>FRETE GRÁTIS</p>
                                    <img className='caminhao' src="/assets/image/caminhao.png" alt="" />

                                </section>

                                <nav className='botao'>

                                <a href="/filtro2"><button>COMPRAR AGORA</button></a>

                                    <a href="/pedido">
                                        <img src="./assets/image/carropaypal.png" alt="" height={35} />
                                    </a>

                                </nav>           </div>

                            <div className='abc'>
                                <img className='imagi' src="/assets/image/filtro-3.png" alt="" />
                                <div className='line'>ㅤ</div>
                                <p className='txt'>PENEIRA SODRAMAR PUÇA COM ARMAÇÃO <br /> BOMBA DE FILTRAGEM 2006L/H BEL 110V</p>

                                <h1 className='preco'>R$ 431,12</h1>

                                <section>

                                    <p>FRETE GRÁTIS</p>
                                    <img className='caminhao' src="/assets/image/caminhao.png" alt="" />

                                </section>

                                <nav className='botao'>

                                <a href="/filtro3"><button>COMPRAR AGORA</button></a>

                                    <a href="/pedido">
                                        <img src="./assets/image/carropaypal.png" alt="" height={35} />
                                    </a>

                                </nav>              </div>

                        </section>












                        <section className='baixo'>

                            <div className='fundo-virado'>

                                <div className='abc'>
                                    <img className='imagi' src="/assets/image/filtro-4.png" alt="" />
                                    <div className='line'>ㅤ</div>
                                    <p className='txt'>BOMBA DE FILTRAGEM 3028 <br /> L/HR 220V BEL</p>


                                    <h1 className='preco'>R$ 457,53</h1>
                                    <section>

                                        <p>FRETE GRÁTIS</p>
                                        <img className='caminhao' src="/assets/image/caminhao.png" alt="" />

                                    </section>

                                    <nav className='botao'>

                                    <a href="/filtro4"><button>COMPRAR AGORA</button></a>

                                        <a href="/pedido">
                                            <img src="./assets/image/carropaypal.png" alt="" height={35} />
                                        </a>

                                    </nav>           </div>

                                <div className='abc'>
                                    <img className='imagi' src="/assets/image/filtro-5.png" alt="" />
                                    <div className='line'>ㅤ</div>
                                    <p className='txt'>BOMBA FILTRANTE FILTRO PARA PISCINA<br />  2006 L/H 110V COM REFIL E MANGUEIRA</p>

                                    <h1 className='preco'>R$ 455,59</h1>

                                    <section>

                                        <p>FRETE GRÁTIS</p>
                                        <img className='caminhao' src="/assets/image/caminhao.png" alt="" />

                                    </section>

                                    <nav className='botao'>

                                    <a href="/filtro5"> <button>COMPRAR AGORA</button></a>

                                        <a href="/pedido">
                                            <img src="./assets/image/carropaypal.png" alt="" height={35} />
                                        </a>

                                    </nav>                 </div>

                                <div className='abc'>
                                    <img className='imagi' src="/assets/image/filtro-6.png" alt="" />
                                    <div className='line'>ㅤ</div>

                                    <p className='txt'>BOMBA FILTRO INTEX PARA  PISCINAS <br />DE 2.006 LITROS/HORA E 110V</p>

                                    <h1 className='preco'>R$ 417,80</h1>

                                    <section>

                                        <p>FRETE GRÁTIS</p>
                                        <img className='caminhao' src="/assets/image/caminhao.png" alt="" />

                                    </section>

                                    <nav className='botao'>

                                    <a href="/filtro6"> <button>COMPRAR AGORA</button></a>

                                        <a href="/pedido">
                                            <img src="./assets/image/carropaypal.png" alt="" height={35} />
                                        </a>

                                    </nav>                </div>
                                {/* final fundo_virado */} </div>

                        </section>
                    </div>

<div>
                        <Rodape/>
                    </div>
                    {/* final divis */} </section>


            </div>
                    


        </div>
    )
}