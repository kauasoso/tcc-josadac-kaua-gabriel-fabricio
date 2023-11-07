import Cabecalho from '../cabecalho'
import RodapePrd from '../rodape'
import './index.scss'





export default function Pisos() {





    return (



        <div className='mae'>
            <div>
                <Cabecalho />
            </div>
            <div className='tudo'>
                <div className='centralizar'>
                    <h1 className='prd'>PISOS</h1>

                    <nav>
                        <h3>Filtros :</h3>

                        <select name="" id="filtro">
                            <option>+FILTROS</option>
                        </select>
                    </nav>
                </div>

                <section className='divis'>

                    <div className='abc'>
                        <img className='imagi' src="/assets/image/piso-1.png" alt="" />
                        <div className='line'>ㅤ</div>

                        <p className='txt'>REVESTIMENTO PARA PISCINA AZUL <br /> VISCAYA 30,3x30,30 EM JABOTA</p>

                        <h1 className='preco'>R$ 891,00</h1>

                        <section>

                            <p>FRETE GRÁTIS</p>
                            <img className='caminhao' src="/assets/image/caminhao.png" alt="" />

                        </section>
                        <a href="/pis1"><button>COMPRAR AGORA</button></a>
                    </div>

                    <div className='abc'>
                        <img className='imagi' src="/assets/image/piso-2.png" alt="" />
                        <div className='line'>ㅤ</div>
                        <p className='txt'>REVESTIMENTO PARA PISCINA NORONHA <br />ㅤㅤㅤ30X30CM ELIANE</p>


                        <h1 className='preco'>R$ 891,00</h1>

                        <section>

                            <p>FRETE GRÁTIS</p>
                            <img className='caminhao' src="/assets/image/caminhao.png" alt="" />

                        </section>

                        <a href="/pis2"><button>COMPRAR AGORA</button></a>
                    </div>

                    <div className='abc'>
                        <img className='imagi' src="../assets/image/piso-3.png" alt="" />
                        <div className='line'>ㅤ</div>
                        <p className='txt'>REVESTIMENTO PARA PISCINA BLAVOS <br />ㅤㅤㅤ25X25CM PORTO FERREIRA</p>

                        <h1 className='preco'>R$ 891,00</h1>

                        <section>

                            <p>FRETE GRÁTIS</p>
                            <img className='caminhao' src="/assets/image/caminhao.png" alt="" />

                        </section>

                        <a href="/pis2"><button>COMPRAR AGORA</button></a>
                    </div>

                    <div className='abc'>
                        <img className='imagi' src="/assets/image/piso-4.png" alt="" />
                        <div className='line'>ㅤ</div>
                        <p className='txt'>    REVESTIMENTO PARA PISCINA ㅤ ELIANE 15,4X15,4CM ELIANE </p>


                        <h1 className='preco'>R$ 891,00</h1>
                        <section>

                            <p>FRETE GRÁTIS</p>
                            <img className='caminhao' src="/assets/image/caminhao.png" alt="" />

                        </section>
                        <a href="/pis3"> <button>COMPRAR AGORA</button></a>
                    </div>

                    <div className='abc'>
                        <img className='imagi' src="/assets/image/piso-5.png" alt="" />
                        <div className='line'>ㅤ</div>
                        <p className='txt'> REVESTIMENTO PARA PISCINA CERÂMICA FLOWER  FUNDO VERDE  20X20CM ELIANE</p>

                        <h1 className='preco'>R$ 891,00</h1>

                        <section>

                            <p>FRETE GRÁTIS</p>
                            <img className='caminhao' src="/assets/image/caminhao.png" alt="" />

                        </section>

                        <a href="/pis5"> <button>COMPRAR AGORA</button></a>
                    </div>

                    <div className='abc'>
                        <img className='imagi' src="/assets/image/piso-6.png" alt="" />
                        <div className='line'>ㅤ</div>

                        <p className='txt'>  REVESTIMENTO PARA PISCINA POOL DARK ㅤㅤBLUE 14X14CM ARTENS</p>

                        <h1 className='preco'>R$ 891,00</h1>

                        <section>

                            <p>FRETE GRÁTIS</p>
                            <img className='caminhao' src="/assets/image/caminhao.png" alt="" />

                        </section>

                        <a href="/pis6">  <button>COMPRAR AGORA</button></a>
                    </div>

                </section>



            </div>
            <div className='fim'>
                <RodapePrd />
            </div>

        </div>
    )
}