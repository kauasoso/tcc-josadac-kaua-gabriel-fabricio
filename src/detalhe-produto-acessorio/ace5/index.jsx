import Cabecalho from '../../cabecalho'
import Rodape from '../../rodape'
import './index.scss'




export default function Ace5(){




    return(

        
        <div className='a1'>
        <div>
             <Cabecalho/>
         </div>





         <div className='a2'>
                    <div className='b1'>
                        <img className='filtro2' src="/assets/image/acessorio-5.png" alt="" />
                    </div>



                    <div className='b2'>
                        <h3 className='titulo'>DRENO ANTI-TURBILHÃO 1.1/2" LATÃO</h3>
                        <h5 className='descricao'>O Dreno Sodramar Anti-Turbilhão 1.1/2" Base Latão é um dispositivo de retorno para piscinas de alvenaria. Ele é construído em latão, um material resistente e durável, e possui uma tampa em ABS que facilita a manutenção. O dreno anti-turbilhão tem como principal função evitar o turbilhonamento da água ao ser acionada a bomba de filtragem. Isso proporciona mais segurança aos usuários da piscina, pois evita que eles sejam sugados pelo dreno.</h5>

                        <h2 className='preco'>R$ 432,90</h2>

                        <a className='adetalhes' href="/pedido"> <button className='comprar'>COMPRAR AGORA</button></a>
                     
                    </div>
            
            </div>



                <div className='a3'>

                    <div className='b3'>



                        <div className='c1'><a className='adetalheproduto' href="/ace2">
                            <img className='imagizi' src="/assets/image/acessorio-2.png" alt="" />
                            <h4 className='ds'>RALO QUEBRA ONDA LATÃO </h4>
                            <h5 className='prc'>R$ 76,50</h5>
                            <div className='branco'>
                            <h4 >FRETE GRÁTIS</h4>
                            <img className='' src="/assets/image/caminhao.png" alt="" />
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
                        <div className='c4'><a className='adetalheproduto' href="/ace1">
                            <img className='imagizi' src="/assets/image/acessorio-1.png" alt="" />
                            <h4 className='ds'>TAMPA FECHADA </h4>
                            <h5 className='prc'>R$50,40</h5>
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