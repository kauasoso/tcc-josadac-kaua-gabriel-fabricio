import Cabecalho from '../../cabecalho'
import Rodape from '../../rodape'
import './index.scss'




export default function Aque2(){




    return(



        <div className='a1'>
        <div>
             <Cabecalho/>
         </div>





         <div className='a2'>
                    <div className='b1'>
                            <img src="assets/image/aqu2.png" alt="" />
                    </div>



                    <div className='b2'>
                        <h3 className='titulo'>CAPA TÉRMICA</h3>
                        <h5 className='descricao'>Capa térmica é um acessório utilizado para cobrir piscinas, com o objetivo de reduzir a perda de calor da água. É composta por um filme plástico de polietileno com bolhas, que flutua sobre a água, com tratamento UV contra os raios ultravioleta e com aditivos antioxidantes. As capas térmicas são fabricadas em diferentes espessuras, que variam de 300 a 500 mícrons. Quanto maior a espessura, maior a retenção de calor.</h5>

                        <h2 className='preco'>R$ 387,00</h2>

                        <a className='adetalhes' href="/pedido"> <button className='comprar'>COMPRAR AGORA</button></a>
                       
                    </div>
            
            </div>



                <div className='a3'>

                    <div className='b3'>



                        <div className='c1'>
                            <img className='imagizi' src="/assets/image/aqu1.png" alt="" />
                            <h4 className='ds'>AQUECEDOR A GÁS HTR400</h4>
                            <h5 className='prc'>R$ 40.216,13</h5>
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
                            <img className='imagizi' src="/assets/image/aquecedor-4.png" alt="" />
                            <h4 className='ds'>CAPA TÉRMICA SOL +GUARD</h4>
                            <h5 className='prc'>R$ 403,53</h5>
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