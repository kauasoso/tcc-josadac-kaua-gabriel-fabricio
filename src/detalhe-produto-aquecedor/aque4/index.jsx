import Cabecalho from '../../cabecalho'
import Rodape from '../../rodape'
import './index.scss'





export default function Aque4(){




    return(



        <div className='a1'>
        <div>
             <Cabecalho/>
         </div>





         <div className='a2'>
                    <div className='b1'>
                        <img className='filtro2' src="/assets/image/aquecedor-4.png" alt="" />
                    </div>



                    <div className='b2'>
                        <h3 className='titulo'>CAPA TÉRMICA SOL +GUARD</h3>
                        <h5 className='descricao'>A capa térmica Sol+Guard é um produto fabricado pela Sibrape que tem como principal função aumentar a temperatura da água da piscina, reduzindo o consumo de energia e produtos químicos. A capa é feita de um material plástico reciclável, com espessura de 500 micras, que é mais resistente a danos e aos raios UV. Possui uma estrutura de bolhas interligadas que ajuda a reter o calor e a evitar a evaporação da água.</h5>

                        <h2 className='preco'>R$ 403,53</h2>

                        <a className='adetalhes' href="/pedido"> <button className='comprar'>COMPRAR AGORA</button></a>
                      
                    </div>
            
            </div>



                <div className='a3'>

                    <div className='b3'>



                        <div className='c1'>
                            <img className='imagizi' src="/assets/image/aqu2.png" alt="" />
                            <h4 className='ds'>CAPA TÉRMICA</h4>
                            <h5 className='prc'>R$ 387,00</h5>
                            <section className='branco'>

                                <p>FRETE GRÁTIS</p>
                                <img className='caminhao' src="/assets/image/caminhao.png" alt="" />

                            </section>
                        </div>
                        <div className='c2'>
                            <img className='imagizi' src="/assets/image/aquecedor-3.png" alt="" />
                            <h4 className='ds'>PLACA SOLAR GIRASSOL</h4>
                            <h5 className='prc'>R$ 782,46</h5>
                            <section className='branco'>

                                <p>FRETE GRÁTIS</p>
                                <img className='caminhao' src="/assets/image/caminhao.png" alt="" />

                            </section>
                        </div>
                        <div className='c3'>
                            <img className='imagizi' src="/assets/image/aqu1.png" alt="" />
                            <h4 className='ds'>AQUECEDOR A GÁS HTR400</h4>
                            <h5 className='prc'>R$ 40.216,13</h5>
                            <section className='branco'>

<p>FRETE GRÁTIS</p>
<img className='caminhao' src="/assets/image/caminhao.png" alt="" />

</section>
                        </div>
                        <div className='c4'>
                            <img className='imagizi' src="/assets/image/aquecedor-5.png" alt="" />
                            <h4 className='ds'>PLACA SOLAR ESTEIRA</h4>
                            <h5 className='prc'>R$ 1246,00</h5>
                            <section className='branco'>

<p>FRETE GRÁTIS</p>
<img className='caminhao' src="/assets/image/caminhao.png" alt="" />

</section>
                        </div>


                        
                    </div>
                    
                </div>

            <div className='final'><Rodape/></div>
        </div>
    )
}