import Cabecalho from '../../cabecalho'
import Rodape from '../../rodape'
import './index.scss'




export default function Limp4(){




    return(
        <div className='a1'>
        <div>
            <Cabecalho/>
         </div>





         <div className='a2'>
                    <div className='b1'>
                        <img className='filtro2' src="/assets/image/limpeza4.png" alt="" />
                    </div>



                    <div className='b2'>
                        <h3 className='titulo'>REDUTOR DE ALCALINIDADE 1 LITRO </h3>
                        <h5 className='descricao'>O Redutor de Alcalinidade e pH Extra Forte HTH é um produto químico que serve para ajustar os parâmetros da água da piscina, reduzindo a alcalinidade e o pH da água quando estão acima da faixa recomendada. A alcalinidade total ideal da água da piscina é de 80 a 120 ppm, e o pH ideal é de 7,0 a 7,4. Quando a alcalinidade total está acima de 120 ppm, pode haver dificuldade no ajuste do pH. O Redutor de Alcalinidade e pH Extra Forte HTH é indicado para esses casos, pois é mais concentrado que os redutores comuns, o que significa que pode ser usado em menor quantidade para obter o mesmo efeito.</h5>

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
                        <img className='imagizi' src="/assets/image/limpeza2.png" alt="" />
                            <h4 className='ds'>REFLETOR SUPER SMD G</h4>
                            <h5 className='prc'>R$330,00</h5>
                            <div className='branco'>
                            <h4 className='frete'>FRETE GRÁTIS</h4>
                            <img className='' src="/assets/image/caminhao.png" alt="" />
                        </div>
                        </div>
                        <div className='c4'>
                        <img className='imagizi' src="/assets/image/limpeza5.png" alt="" />
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