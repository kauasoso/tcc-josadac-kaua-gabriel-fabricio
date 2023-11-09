import Cabecalho from '../../cabecalho'
import Rodape from '../../rodape'
import './index.scss'



export default function Ace1() {




    return (



        <div className='a1'>
            <div>
                <Cabecalho />
            </div>





            <div className='a2'>
                <div className='b1'>
                    <img className='filtro2' src="/assets/image/acessorio-1.png" alt="" />
                </div>



                <div className='b2'>
                    <h3 className='titulo'>ﾠﾠTAMPA FECHAMENTO <br /> AUTOMÁTICO SODRAMAR</h3>
                    <h5 className='descricao'>
                        A Tampa de Fechamento Automático Sodramar é um dispositivo que garante a segurança dos banhistas em piscinas. Ela é composta por uma tampa de plástico que se encaixa sobre o dispositivo de aspiração, e um mecanismo que fecha a tampa automaticamente quando um objeto ou pessoa se aproxima. A Tampa de Fechamento Automático Sodramar é um produto essencial para piscinas residenciais e comerciais. Ela é segura, prática e tem um design moderno.</h5>

                    <h2 className='preco'>R$50,40</h2>

                    <a className='adetalhes' href="/pedido"> <button className='comprar'>COMPRAR AGORA</button></a>

                </div>

            </div>



            <div className='a3'>

                <div className='b3'>



                    <div className='c1'><a className='adetalheproduto' href="/ace2">
                        <img className='imagizi' src="/assets/image/acessorio-2.png" alt="" />
                        <h4 className='ds'>RALO QUEBRA ONDA LATÃO </h4>
                        <h5 className='prc'>R$ 76,50</h5>
                        <section className='branco'>

                            <p>FRETE GRÁTIS</p>
                            <img className='caminhao' src="/assets/image/caminhao.png" alt="" />

                        </section></a>
                    </div>
                    <div className='c2'><a className='adetalheproduto' href="/ace3">
                        <img className='imagizi' src="/assets/image/acessorio-3.png" alt="" />
                        <h4 className='ds'>PENEIRA METÁLICA</h4>
                        <h5 className='prc'>R$ 35,10</h5>
                        <section className='branco'>

                            <p>FRETE GRÁTIS</p>
                            <img className='caminhao' src="/assets/image/caminhao.png" alt="" />

                        </section></a>
                    </div>
                    <div className='c3'><a className='adetalheproduto' href="/ace4">
                        <img className='imagizi' src="/assets/image/acessorio-4.png" alt="" />
                        <h4 className='ds'>DISPOSITIVO SODRAMAR</h4>
                        <h5 className='prc'>R$ 74,70</h5>
                        <section className='branco'>

                            <p>FRETE GRÁTIS</p>
                            <img className='caminhao' src="/assets/image/caminhao.png" alt="" />

                        </section></a>
                    </div>
                    <div className='c4'><a className='adetalheproduto' href="/ace5">
                        <img className='imagizi' src="/assets/image/acessorio-5.png" alt="" />
                        <h4 className='ds'>DRENO ANTI BASE LATÃO</h4>
                        <h5 className='prc'>R$ 432,90</h5>
                        <section className='branco'>

                            <p>FRETE GRÁTIS</p>
                            <img className='caminhao' src="/assets/image/caminhao.png" alt="" />

                        </section></a>
                    </div>



                </div>

            </div>

            <div className='final'><Rodape /></div>
        </div>
    )
}