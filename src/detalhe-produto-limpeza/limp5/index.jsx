import Cabecalho from '../../cabecalho'
import Rodape from '../../rodape'
import './index.scss'




export default function Limp5(){




    return(
        <div className='a1'>
        <div>
            <Cabecalho/>
         </div>





         <div className='a2'>
                    <div className='b1'>
                        <img className='filtro2' src="/assets/image/limpeza5.png" alt="" />
                    </div>



                    <div className='b2'>
                        <h3 className='titulo'>BARRILHA LEVE ELEVADOR DE PH HTH</h3>
                        <h5 className='descricao'> A Barrilha Leve Elevador de pH em Pó HTH é um produto químico utilizado para aumentar o pH da água da piscina. É um pó branco, fino, que se dissolve facilmente na água. A Barrilha Leve HTH é composta de carbonato de sódio, que reage com o ácido da água para formar carbonato de cálcio, um composto que é neutro em termos de pH.</h5>

                        <h2 className='preco'>R$320,00</h2>

                        <a className='adetalhes' href="/pedido"> <button className='comprar'>COMPRAR AGORA</button></a>
                      
                    </div>
            
            </div>



                <div className='a3'>

                    <div className='b3'>



                        <div className='c1'>
                            <img className='imagizi' src="/assets/image/limpeza1.png" alt="" />
                            <h4 className='ds'>REFLETOR R125</h4>
                            <h5 className='prc'>R$ 345,90</h5>
                            <div className='branco'>
                            <h4 className='frete'>FRETE GRÁTIS</h4>
                            <img className='' src="/assets/image/caminhao.png" alt="" />
                        </div>
                        </div>
                        <div className='c2'>
                        <img className='imagizi' src="/assets/image/limpeza3.png" alt="" />
                            <h4 className='ds'>REFLETOR SUPER LED'S G</h4>
                            <h5 className='prc'>R$390,00</h5>
                            <div className='branco'>
                            <h4 className='frete'>FRETE GRÁTIS</h4>
                            <img className='' src="/assets/image/caminhao.png" alt="" />
                        </div>
                        </div>
                        <div className='c3'>
                        <img className='imagizi' src="/assets/image/limpeza4.png" alt="" />
                            <h4 className='ds'>REFLETOR SUPER SMD G</h4>
                            <h5 className='prc'>R$330,00</h5>
                            <div className='branco'>
                            <h4 className='frete'>FRETE GRÁTIS</h4>
                            <img className='' src="/assets/image/caminhao.png" alt="" />
                        </div>
                        </div>
                        <div className='c4'>
                        <img className='imagizi' src="/assets/image/limpeza2.png" alt="" />
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