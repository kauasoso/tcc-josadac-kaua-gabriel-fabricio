import Cabecalho from '../../cabecalho'
import Rodape from '../../rodape'
import './index.scss'




export default function Ilu2(){





    return(



        <div className='a1'>
        <div>
            <Cabecalho/>
         </div>





         <div className='a2'>
                    <div className='b1'>
                        <img className='filtro2' src="/assets/image/ilu-2.png" alt="" />
                    </div>



                    <div className='b2'>
                        <h3 className='titulo'>REFLETOR R125</h3>
                        <h5 className='descricao'>
O refletor R125 é um dispositivo elétrico usado para direcionar a luz de uma lâmpada. Ele é composto por um corpo metálico, um vidro refletivo e um soquete para a lâmpada. O corpo do refletor é geralmente feito de alumínio ou aço galvanizado, e o vidro refletivo é feito de vidro temperado ou vidro reflexivo. O soquete é geralmente do tipo E27, que é o padrão para lâmpadas incandescentes e halógenas. Os refletores R125 são usados em uma variedade de aplicações, incluindo iluminação de ambientes internos e externos, iluminação de obras de arte e iluminação de eventos. Eles são disponíveis em uma variedade de tamanhos e potências, para atender às diferentes necessidades de iluminação. </h5>

                        <h2 className='preco'>R$ 345,90</h2>

                        <a className='adetalhes' href="/pedido"> <button className='comprar'>COMPRAR AGORA</button></a>
                    
                    </div>
            
            </div>



                <div className='a3'>

                    <div className='b3'>



                        <div className='c1'>
                            <img className='imagizi' src="/assets/image/ilu-1.png" alt="" />
                            <h4 className='ds'>REFLETOR GLOBAL</h4>
                            <h5 className='prc'>R$320,00</h5>
                            <div className='branco'>
                            <h4 className='frete'>FRETE GRÁTIS</h4>
                            <img className='' src="/assets/image/caminhao.png" alt="" />
                        </div>
                        </div>
                        <div className='c2'>
                            <img className='imagizi' src="/assets/image/ilu-3.png" alt="" />
                            <h4 className='ds'>REFLETOR SUPER LED'S G</h4>
                            <h5 className='prc'>R$390,00</h5>
                            <div className='branco'>
                            <h4 className='frete'>FRETE GRÁTIS</h4>
                            <img className='' src="/assets/image/caminhao.png" alt="" />
                        </div>
                        </div>
                        <div className='c3'>
                            <img className='imagizi' src="/assets/image/ilu-4.png" alt="" />
                            <h4 className='ds'>REFLETOR SUPER SMD G</h4>
                            <h5 className='prc'>R$330,00</h5>
                            <div className='branco'>
                            <h4 className='frete'>FRETE GRÁTIS</h4>
                            <img className='' src="/assets/image/caminhao.png" alt="" />
                        </div>
                        </div>
                        <div className='c4'>
                            <img className='imagizi' src="/assets/image/ilu-5.png" alt="" />
                            <h4 className='ds'>REFLETOR SLIM LED'S</h4>
                            <h5 className='prc'>R$150,00</h5>
                            <div className='branco'>
                            <h4 className='frete'>FRETE GRÁTIS</h4>
                            <img className='' src="/assets/image/caminhao.png" alt="" />
                        </div>
                        </div>


                        
                    </div>
                    
                </div>

            <div className='final'><Rodape/></div>
        </div>
    )
}