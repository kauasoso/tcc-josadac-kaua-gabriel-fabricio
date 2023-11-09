import Cabecalho from '../../cabecalho'
import Rodape from '../../rodape'
import './index.scss'




export default function Ace4(){



    return(



        <div className='a1'>
        <div>
             <Cabecalho/>
         </div>





         <div className='a2'>
                    <div className='b1'>
                        <img className='filtro2' src="/assets/image/acessorio-4.png" alt="" />
                    </div>



                    <div className='b2'>
                        <h3 className='titulo'>DISPOSITIVO RETORNO 1.1/2''<br/>ㅤLATÃO INOX</h3>
                        <h5 className='descricao'>O dispositivo de retorno Sodramar 1.1/2" latão inox é um componente essencial para o sistema de filtragem de piscinas. Ele é responsável por devolver a água filtrada à piscina, garantindo a circulação e oxigenação da água. O dispositivo é fabricado em latão inox, um material resistente à corrosão e à oxidação. Possui um design moderno e elegante, que combina com qualquer tipo de piscina.</h5>

                        <h2 className='preco'>R$ 74,70</h2>

                        <a className='adetalhes' href="/pedido"> <button className='comprar'>COMPRAR AGORA</button></a>
                     
                    </div>
            
            </div>



                <div className='a3'>

                    <div className='b3'>



                        <div className='c1'><a className='adetalheproduto' href="/ace1">
                            <img className='imagizi' src="/assets/image/acessorio-1.png" alt="" />
                            <h4 className='ds'>TAMPA FECHADA </h4>
                            <h5 className='prc'>R$50,40</h5>
                            <div className='branco'>
                            <h4 >FRETE GRÁTIS</h4>
                            <img className='' src="/assets/image/caminhao.png" alt="" />
                        </div></a>
                        </div>
                        <div className='c2'><a className='adetalheproduto' href="/ace2">
                            <img className='imagizi' src="/assets/image/acessorio-2.png" alt="" />
                            <h4 className='ds'>RALO QUEBRA ONDA LATÃO </h4>
                            <h5 className='prc'>R$ 76,50</h5>
                            <div className='branco'>
                            <h4 >FRETE GRÁTIS</h4>
                            <img className='' src="/assets/image/caminhao.png" alt="" />
                        </div></a>
                        </div>
                        <div className='c3'><a className='adetalheproduto' href="/ace3">
                            <img className='imagizi' src="/assets/image/acessorio-3.png" alt="" />
                            <h4 className='ds'>PENEIRA METÁLICA</h4>
                            <h5 className='prc'>R$ 35,10</h5>
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