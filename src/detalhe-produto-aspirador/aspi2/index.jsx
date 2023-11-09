import Cabecalho from '../../cabecalho'
import Rodape from '../../rodape'
import './index.scss'





export default function Aspi2(){





    return(



        
        <div className='a1'>
        <div>
             <Cabecalho/>
         </div>





         <div className='a2'>
                    <div className='b1'>
                        <img className='filtro2' src="/assets/image/aspi-2.png" alt="" />
                    </div>



                    <div className='b2'>
                        <h3 className='titulo'>ROBÔ DOLPHIN XT5</h3>
                        <h5 className='descricao'>O Robô Dolphin XT5 é um aspirador automático para piscinas que limpa o fundo, as paredes e a linha d'água da piscina de forma autônoma. Ele é ideal para piscinas de até 10 metros de comprimento e é capaz de limpar toda a piscina em um ciclo de 3 horas. O Robô Dolphin XT5 possui um sistema de escaneamento giroscópico que permite que ele mapeie a piscina e limpe todos os cantos e recantos. Ele também possui um sistema de escovas flexíveis que removem a sujeira e os detritos do fundo e das paredes da piscina.</h5>

                        <h2 className='preco'>R$ 4987,00</h2>

                        <a className='adetalhes' href="/pedido"> <button className='comprar'>COMPRAR AGORA</button></a>
                     
                    </div>
            
            </div>



                <div className='a3'>

                    <div className='b3'>



                        <div className='c1'><a className='adetalheproduto' href="/asp1">
                            <img className='imagizi' src="/assets/image/aspi-1.png" alt="" />
                            <h4 className='ds'>ASPIRADOR SANDSHARKL</h4>
                            <h5 className='prc'>R$ 5452,00</h5>
                            <section className='branco'>

                            <p>FRETE GRÁTIS</p>
                            <img className='caminhao' src="/assets/image/caminhao.png" alt="" />

                        </section></a>
                        </div>
                        <div className='c2'><a className='adetalheproduto' href="/asp3">
                            <img className='imagizi' src="/assets/image/aspi-3.png" alt="" />
                            <h4 className='ds'>AQUECEDOR A GÁS HTR400A</h4>
                            <h5 className='prc'>R$ 3490,00</h5>
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