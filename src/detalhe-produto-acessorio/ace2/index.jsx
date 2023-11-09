import Cabecalho from '../../cabecalho'
import Rodape from '../../rodape'
import './index.scss'




export default function Ace2(){



    return(

        <div className='a1'>
        <div>
             <Cabecalho/>
         </div>





         <div className='a2'>
                    <div className='b1'>
                        <img className='filtro2' src="/assets/image/acessorio-2.png" alt="" />
                    </div>



                    <div className='b2'>
                        <h3 className='titulo'>RALO SODRAMAR<br/>  QUEBRA ONDA</h3>
                        <h5 className='descricao'>
O Ralo Sodramar Quebra Onda Pratic Rosca Latão Alvenaria é um produto de alta qualidade e design moderno, ideal para piscinas de alvenaria. Ele é feito de aço inox 316, que é um material resistente à corrosão e à oxidação. O ralo possui um sistema de quebra-ondas que ajuda a reduzir o impacto das ondas na borda da piscina, evitando o desgaste do revestimento. O ralo também é equipado com um tubo de 50 mm de diâmetro, que garante um escoamento rápido da água.</h5>

                        <h2 className='preco'>R$ 76,50</h2>

                        <a className='adetalhes' href="/pedido"> <button className='comprar'>COMPRAR AGORA</button></a>
                       
                    </div>
            
            </div>



                <div className='a3'>

                    <div className='b3'>



                        <div className='c1'><a className='adetalheproduto' href="/ace1">
                            <img className='imagizi' src="/assets/image/acessorio-1.png" alt="" />
                            <h4 className='ds'>TAMPA AUTOMÁTICO </h4>
                            <h5 className='prc'>R$50,40</h5>
                            <div className='branco'>
                            <h4>FRETE GRÁTIS</h4>
                            <img className='caminhao' src="/assets/image/caminhao.png" alt="" />
                        </div></a>
                        </div>
                        <div className='c2'><a className='adetalheproduto' href="/ace3">
                            <img className='imagizi' src="/assets/image/acessorio-3.png" alt="" />
                            <h4 className='ds'>PENEIRA METÁLICA</h4>
                            <h5 className='prc'>R$ 35,10</h5>
                            <div className='branco'>
                            <h4 >FRETE GRÁTIS</h4>
                            <img className='' src="/assets/image/caminhao.png" alt="" />
                        </div></a>
                        </div>
                        <div className='c3'><a className='adetalheproduto' href="/ace4">
                            <img className='imagizi' src="/assets/image/acessorio-4.png" alt="" />
                            <h4 className='ds'>DISPOSITIVO SODRAMAR </h4>
                            <h5 className='prc'>R$ 74,70</h5>
                            <div className='branco'>
                            <h4 >FRETE GRÁTIS</h4>
                            <img className='' src="/assets/image/caminhao.png" alt="" />
                        </div></a>
                        </div>
                        <div className='c4'><a className='adetalheproduto' href="/ace5">
                            <img className='imagizi' src="/assets/image/acessorio-5.png" alt="" />
                            <h4 className='ds'>DRENO ANTI BASE LATÃO</h4>
                            <h5 className='prc'>R$ 432,90</h5>
                            <div className='branco'>
                            <h4 >FRETE GRÁTIS</h4>
                            <img className='' src="/assets/image/caminhao.png" alt="" />
                        </div></a>
                        </div>


                        
                    </div>
                    
                </div>

            <div className='final'><Rodape/></div>
        </div>
    )
}