import Cabecalho from '../../cabecalho'
import Rodape from '../../rodape'
import './index.scss'





export default function Filtro4() {

    return (
        <div className='a1'>
            <div>
                <Cabecalho />
            </div>

            <div className='a2'>
                <div className='b1'>

                    <img className='filtro2' src="/assets/image/filtro-6.png" alt="" />
                </div>



                <div className='b2'>
                    <h3 className='titulo'>BOMBA DE FILTRAGEM <br /> 1136 L/HR 110V BEL <br /> LAZER 174400</h3>
                    <h5 className='descricao'>
A bomba filtro Intex para piscinas de 2.006 litros/hora e 110V é um equipamento essencial para manter a água da sua piscina limpa e cristalina. Com uma vazão de 2.006 litros por hora, ela é ideal para piscinas de até 12.000 litros. A bomba é composta por um motor elétrico, um filtro e duas mangueiras. O motor elétrico é responsável por bombear a água da piscina para o filtro. O filtro, por sua vez, é responsável por reter as impurezas da água, como folhas, insetos e outros detritos. As mangueiras são responsáveis por transportar a água da piscina para o filtro e de volta para a piscina.</h5>

                    <h2 className='preco'>R$ 417,80</h2>

                    <a className='adetalhes' href="/pedido"> <button className='comprar'>COMPRAR AGORA</button></a>
                
                </div>

            </div>


            <div className='a3'>

                <div className='b3'>



                    <div className='c1'>
                        <img className='imagizi' src="/assets/image/filtro-1.png" alt="" />
                        <h4 className='ds'>Filtro para piscina Bivolt</h4>
                        <h5 className='prc'>R$ 891,00</h5>
                        <div className='branco'>
                            <h4 className='frete'>FRETE GRÁTIS</h4>
                            <img className='' src="/assets/image/caminhao.png" alt="" />
                        </div>
                    </div>
                    <div className='c2'>
                        <img className='imagizi' src="/assets/image/filtro-2.png" alt="" />
                        <h4 className='ds'>Peneira L/H Bel 110v</h4>
                        <h5 className='prc'>R$ 431,12</h5>
                        <div className='branco'>
                            <h4 className='frete'>FRETE GRÁTIS</h4>
                            <img className='' src="/assets/image/caminhao.png" alt="" />
                        </div></div>
                    <div className='c3'>
                        <img className='imagizi' src="/assets/image/filtro-3.png" alt="" />
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
                        </div></div>



                </div>

            </div>

            <div className='final'><Rodape /></div>

        </div>





    )
}