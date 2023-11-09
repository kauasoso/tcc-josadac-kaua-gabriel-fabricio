import Cabecalho from '../../cabecalho'
import Rodape from '../../rodape'
import './index.scss'



export default function Bomba2(){




    return(



        <div className='a1'>
        <div>
             <Cabecalho/>
         </div>





         <div className='a2'>
                    <div className='b1'>
                        <img className='filtro2' src="/assets/image/bomba-2.png" alt="" />
                    </div>



                    <div className='b2'>
                        <h3 className='titulo'> FILTRO SEM AREIA E<br/>BOMBA COM CARRINHO </h3>
                        <h5 className='descricao'>O filtro sem areia e bomba com carrinho é um sistema de filtração de piscinas que utiliza um meio filtrante alternativo à areia, geralmente um cartucho de polipropileno ou um filtro de espuma. O sistema é composto por um filtro, uma bomba e um carrinho para transporte. O filtro é responsável por reter as impurezas da água da piscina, como folhas, cabelos, insetos e outros detritos. O meio filtrante é instalado no interior do filtro e é responsável por realizar a filtração.</h5>

                        <h2 className='preco'>R$ 7.543.99</h2>

                        <a className='adetalhes' href="/pedido"> <button className='comprar'>COMPRAR AGORA</button></a>
                       
                    </div>
            
            </div>



                <div className='a3'>

                    <div className='b3'>



                        <div className='c1'><a className='adetalheproduto' href="/bomb1">
                            <img className='imagizi' src="/assets/image/bomba-1.png" alt="" />
                            <h4 className='ds'>BOMBA FILTRANTE PISCINA</h4>
                            <h5 className='prc'>R$ 2.321,91</h5>
                            <section className='branco'>

<p>FRETE GRÁTIS</p>
<img className='caminhao' src="/assets/image/caminhao.png" alt="" />

</section></a>
                        </div>
                        <div className='c2'><a className='adetalheproduto' href="/bomb3">
                            <img className='imagizi' src="/assets/image/bomba-3.png" alt="" />
                            <h4 className='ds'>KIT BOMBA CV MONOFÁSICA</h4>
                            <h5 className='prc'>R$ 4.186,09</h5>
                            <section className='branco'>

                            <p>FRETE GRÁTIS</p>
                            <img className='caminhao' src="/assets/image/caminhao.png" alt="" />

                        </section></a>
                        </div>
                        <div className='c3'><a className='adetalheproduto' href="/ace4">
                            <img className='imagizi' src="/assets/image/acessorio-4.png" alt="" />
                            <h4 className='ds'>DISPOSITIVO SODRAMAR INOX</h4>
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

            <div className='final'><Rodape/></div>
        </div>
    )
}