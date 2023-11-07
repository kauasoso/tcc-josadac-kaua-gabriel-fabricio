import Cabecalho from '../../cabecalho'
import Rodape from '../../rodape'
import './index.scss'






export default function Bor2(){






    return(




        <div className='a1'>
        <div>
            <Cabecalho/>
         </div>





         <div className='a2'>
                    <div className='b1'>
                        <img className='filtro2' src="/assets/image/bordas-2.png" alt="" />
                    </div>



                    <div className='b2'>
                        <h3 className='titulo'>BORDA CERÂMICA <br/>ㅤGRANILHADA</h3>
                        <h5 className='descricao'>A borda cerâmica granilhada 296G é um produto de alta qualidade, fabricado com matérias-primas de primeira linha. É ideal para aplicação em piscinas, saunas, spas e outros ambientes úmidos. A borda 296G é composta por uma base de cerâmica esmaltada e uma camada de granilha decorativa. A granilha é aplicada na base em uma camada uniforme, garantindo um acabamento resistente e bonito.</h5>

                        <h2 className='preco'>R$ 307,00</h2>

                        <a className='adetalhes' href="/pedido"> <button className='comprar'>COMPRAR AGORA</button></a>
                       </div>
            
            </div>



                <div className='a3'>

                    <div className='b3'>



                        <div className='c1'>
                            <img className='imagizi' src="/assets/image/bordas-1.png" alt="" />
                            <h4 className='ds'>BORDA CERÂMICA 216G</h4>
                            <h5 className='prc'>R$ 287,13</h5>
                            <div className='branco'>
                            <h4 className='frete'>FRETE GRÁTIS</h4>
                            <img className='' src="/assets/image/caminhao.png" alt="" />
                        </div>
                        </div>
                        <div className='c2'>
                            <img className='imagizi' src="/assets/image/bordas-3.png" alt="" />
                            <h4 className='ds'>BORDA GRADARA</h4>
                            <h5 className='prc'>R$ 202,99</h5>
                            <div className='branco'>
                            <h4 className='frete'>FRETE GRÁTIS</h4>
                            <img className='' src="/assets/image/caminhao.png" alt="" />
                        </div>
                        </div>
                        <div className='c3'>
                            <img className='imagizi' src="/assets/image/bordas-4.png" alt="" />
                            <h4 className='ds'>BORDA PALLADIO</h4>
                            <h5 className='prc'>R$ 103,33</h5>
                            <div className='branco'>
                            <h4 className='frete'>FRETE GRÁTIS</h4>
                            <img className='' src="/assets/image/caminhao.png" alt="" />
                        </div>
                        </div>
                        <div className='c4'>
                            <img className='imagizi' src="/assets/image/bordas-5.png" alt="" />
                            <h4 className='ds'>CANTONEIRA EXTERNA AZUL</h4>
                            <h5 className='prc'>R$ 266,00</h5>
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