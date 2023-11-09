import Cabecalho from '../../cabecalho'
import Rodape from '../../rodape'
import './index.scss'




export default function Aque1(){




    return(



        <div className='a1'>
        <div>
             <Cabecalho/>
         </div>





         <div className='a2'>
                    <div className='b1'>
                        <img className='filtro2' src="/assets/image/aqu1.png" alt="" />
                    </div>



                    <div className='b2'>
                        <h3 className='titulo'>AQUECEDOR A GÁS HTR400</h3>
                        <h5 className='descricao'>Aquecedor de alto desempenho e compacto; oferece um sistema interno <br /> exclusivo, altamente eficiente que mistura ar e gás,  permitindo o <br /> aquecimento rápido da    piscina ou spa; as taxas de eficiência <br /> energética fazem desteaquecedor a melhor solução tanto para piscina <br /> residencial como comercial, oferecendo conforto e economia; possui <br /> um sistema de ignição direta, que dispensa chama-piloto.</h5>

                        <h2 className='preco'>R$ 40.216,13</h2>

                        <a className='adetalhes' href="/pedido"> <button className='comprar'>COMPRAR AGORA</button></a>
                    
                    </div>
            
            </div>



                <div className='a3'>

                    <div className='b3'>


                    <img className='setaesquerda' src="/assets/images/setaesquerda.png" alt="" />

                        <div className='c1'><a className='adetalheproduto' href="aq2">
                            <img className='imagizi' src="/assets/image/aqu2.png" alt="" />
                            <h4 className='ds'>CAPA TÉRMICA</h4>
                            <h5 className='prc'>R$ 387,00</h5>
                            <section className='branco'>

                                <p>FRETE GRÁTIS</p>
                                <img className='caminhao' src="/assets/image/caminhao.png" alt="" />

                            </section></a>
                        </div>
                        <div className='c2'><a className='adetalheproduto' href="/aq3">
                            <img className='imagizi' src="/assets/image/aquecedor-3.png" alt="" />
                            <h4 className='ds'>PLACA SOLAR GIRASSOL</h4>
                            <h5 className='prc'>R$ 782,46</h5>
                            <section className='branco'>

<p>FRETE GRÁTIS</p>
<img className='caminhao' src="/assets/image/caminhao.png" alt="" />

</section></a>
                        </div>
                        <div className='c3'><a className='adetalheproduto' href="/aq4">
                            <img className='imagizi' src="/assets/image/aquecedor-4.png" alt="" />
                            <h4 className='ds'>CAPA TÉRMICA SOL +GUARD</h4>
                            <h5 className='prc'>R$ 403,53</h5>
                            <section className='branco'>

<p>FRETE GRÁTIS</p>
<img className='caminhao' src="/assets/image/caminhao.png" alt="" />

</section></a>
                        </div>
                        <div className='c4'><a className='adetalheproduto' href="/aq5">
                            <img className='imagizi' src="/assets/image/aquecedor-5.png" alt="" />
                            <h4 className='ds'>PLACA SOLAR ESTEIRA</h4>
                            <h5 className='prc'>R$ 1246,00</h5>
                            <section className='branco'>

<p>FRETE GRÁTIS</p>
<img className='caminhao' src="/assets/image/caminhao.png" alt="" />

</section></a>
                        </div>


                        <img className='setadireirta' src="/assets/images/setdireita.png" alt="" />
                        
                    </div>
                    
                </div>

            <div className='final'><Rodape/></div>
        </div>
    )
}