import Cabecalho from '../../cabecalho'
import Rodape from '../../rodape'
import './index.scss'





export default function Filtro1() {

    return (
        <div className='a1'>
            <div>
                <Cabecalho />
            </div>

            <div className='a2'>
                <div className='b1'>
                    <img className='filtro2' src="/assets/image/filtro-1.png" alt="" />
                </div>



                <div className='b2'>
                    <h3 className='titulo'>FILTRO ATÉ 30.000 <br /> COM BOMBA 1/3 CV <br /> BIVOLT</h3>

                    <h5 className='descricao'>O filtro para piscina até 30.000 litros com bomba 1/3 CV bivolt é um sistema completo para a limpeza de piscinas residenciais e comerciais de pequeno e médio porte. O filtro é responsável por reter as impurezas da água, como folhas, insetos e sujeira, enquanto a bomba é responsável por fazer a água circular pelo filtro. O filtro para piscina até 30.000 litros com bomba 1/3 CV bivolt é uma solução ideal para quem busca um sistema completo e eficiente para a limpeza de piscinas residenciais e comerciais de pequeno e médio porte.</h5>

                    <h2 className='preco'>R$ 891,00</h2>

                    <a className='adetalhes' href="/pedido"> <button className='comprar'>COMPRAR AGORA</button></a>
                  
                </div>

            </div>


            <div className='a3'>

                <div className='b3'>


                    <div className='c1'>
                        <img className='imagizi' src="/assets/image/filtro-2.png" alt="" />
                        <h4 className='ds'>Bomba de filtragem</h4>
                        <h5 className='prc'>R$ 891,00</h5>

                        <div className='branco'>
                            <h4 className='frete'>FRETE GRÁTIS</h4>
                            <img className='' src="/assets/image/caminhao.png" alt="" />
                        </div>

                    </div>
                    <div className='c2'>
                        <img className='imagizi' src="/assets/image/filtro-3.png" alt="" />
                        <h4 className='ds'>Peneira L/H Bel 110v</h4>
                        <h5 className='prc'>R$ 431,12</h5>
                        <div className='branco'>
                            <h4 className='frete'>FRETE GRÁTIS</h4>
                            <img className='' src="/assets/image/caminhao.png" alt="" />
                        </div>
                    </div>
                    <div className='c3'>
                        <img className='imagizi' src="/assets/image/filtro-4.png" alt="" />
                        <h4 className='ds'>Bomba /HR 220v Bel</h4>
                        <h5 className='prc'>R$ 457,53</h5>
                        <div className='branco'>
                            <h4 className='frete'>FRETE GRÁTIS</h4>
                            <img className='' src="/assets/image/caminhao.png" alt="" />
                        </div>
                    </div>
                    <div className='c4'>
                        <img className='imagizi' src="/assets/image/filtro-5.png" alt="" />
                        <h4 className='ds'>Bomba Filtrante L/H 110v</h4>
                        <h5 className='prc'>R$ 455,59</h5>
                        <div className='branco'>
                            <h4 className='frete'>FRETE GRÁTIS</h4>
                            <img className='' src="/assets/image/caminhao.png" alt="" />
                        </div>
                    </div>



                </div>

            </div>

            <div className='final'><Rodape /></div>

        </div>





    )
}