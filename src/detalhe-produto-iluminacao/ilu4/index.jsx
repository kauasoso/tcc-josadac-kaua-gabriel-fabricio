import Cabecalho from '../../cabecalho'
import Rodape from '../../rodape'
import './index.scss'




export default function Ilu4(){




    return(

        
        <div className='a1'>
        <div>
            <Cabecalho/>
         </div>





         <div className='a2'>
                    <div className='b1'>
                        <img className='filtro2' src="/assets/image/ilu-4.png" alt="" />
                    </div>



                    <div className='b2'>
                        <h3 className='titulo'>REFLETOR SUPER SMD G</h3>
                        <h5 className='descricao'>O Refletor Super SMD G é um produto de iluminação de alta qualidade, ideal para uso externo. É fabricado em alumínio e vidro temperado, o que garante sua durabilidade e resistência às intempéries. Possui um design moderno e compacto, que o torna uma opção versátil para diversos ambientes. O  Refletor Super SMD G é equipado com LEDs SMD, que proporcionam uma iluminação uniforme e de alta qualidade. Sua potência de 200W garante uma ampla cobertura de iluminação, sendo ideal para áreas de grande porte, como fachadas, jardins, piscinas e estacionamentos.</h5>

                        <h2 className='preco'>R$ 330,00</h2>

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
                            <img className='imagizi' src="/assets/image/ilu-2.png" alt="" />
                            <h4 className='ds'>REFLETOR R125</h4>
                            <h5 className='prc'>R$345,90</h5>
                            <div className='branco'>
                            <h4 className='frete'>FRETE GRÁTIS</h4>
                            <img className='' src="/assets/image/caminhao.png" alt="" />
                        </div>
                        </div>
                        <div className='c3'>
                            <img className='imagizi' src="/assets/image/ilu-3.png" alt="" />
                            <h4 className='ds'>REFLETOR SUPER LED'S G</h4>
                            <h5 className='prc'>R$390,00</h5>
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