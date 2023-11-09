import Cabecalho from '../../cabecalho'
import Rodape from '../../rodape'
import './index.scss'




export default function Aspi3(){





    return(




        <div className='a1'>
        <div>
             <Cabecalho/>
         </div>





         <div className='a2'>
                    <div className='b1'>
                        <img className='filtro2' src="/assets/image/aspi-3.png" alt="" />
                    </div>



                    <div className='b2'>
                        <h3 className='titulo'>AQUECEDOR A GÁS HTR400A</h3>
                        <h5 className='descricao'>O aquecedor a gás HTR400 é um equipamento projetado para manter a temperatura da água da piscina em um nível confortável, mesmo em dias frios. Ele é compacto e eficiente, com capacidade para aquecer piscinas de até 330.000 litros. O HTR400 é um aquecedor de gás natural ou GLP, com um sistema de ignição direta que dispensa chama piloto. Ele possui um gabinete em termoplástico de alta resistência, que é resistente à corrosão, ao calor e às variações climáticas.</h5>

                        <h2 className='preco'>R$ 3490,00</h2>

                        <a className='adetalhes' href="/pedido"> <button className='comprar'>COMPRAR AGORA</button></a>
                       
                    </div>
            
            </div>



                <div className='a3'>

                    <div className='b3'>



                        <div className='c1'><a className='adetalheproduto' href="/asp2">
                            <img className='imagizi' src="/assets/image/aspi-2.png" alt="" />
                            <h4 className='ds'>ROBÔ DOLPHIN XT5</h4>
                            <h5 className='prc'>R$ 4987,00</h5>
                            <section className='branco'>

<p>FRETE GRÁTIS</p>
<img className='caminhao' src="/assets/image/caminhao.png" alt="" />

</section></a>
                        </div>
                        <div className='c2'><a className='adetalheproduto' href="/asp1">
                            <img className='imagizi' src="/assets/image/aspi-1.png" alt="" />
                            <h4 className='ds'>ASPIRADOR SANDSHARKL</h4>
                            <h5 className='prc'>R$ 5452,00</h5>
                            <section className='branco'>

                            <p>FRETE GRÁTIS</p>
                            <img className='caminhao' src="/assets/image/caminhao.png" alt="" />

                        </section></a>
                        </div>
                        <div className='c3'><a className='adetalheproduto' href="/ace4">
                            <img className='imagizi' src="/assets/image/acessorio-4.png" alt="" />
                            <h4 className='ds'>DISPOSITIVO SODRAMAR </h4>
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