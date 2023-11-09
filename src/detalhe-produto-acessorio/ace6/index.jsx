import Cabecalho from '../../cabecalho'
import Rodape from '../../rodape'
import './index.scss'




export default function Ace6() {




    return(



        <div className='a1'>
        <div>
             <Cabecalho/>
         </div>





         <div className='a2'>
                    <div className='b1'>
                        <img className='filtro2' src="/assets/image/acessorio-6.png" alt="" />
                    </div>



                    <div className='b2'>
                        <h3 className='titulo'>Escova Sodramar Luxo <br/>Nylon 44cm</h3>
                        <h5 className='descricao'>A Escova Sodramar Luxo Nylon 44cm é uma ferramenta indispensável para a limpeza de piscinas de vinil, fibra e alvenaria. Com 44 cm de diâmetro, ela é ideal para a limpeza de superfícies maiores, como o fundo e as laterais da piscina. A escova é fabricada em ABS, um material resistente e durável. As cerdas de nylon são de dupla densidade, com uma camada externa macia e uma camada interna mais resistente. Isso permite uma limpeza eficiente sem danificar a superfície da piscina.</h5>

                        <h2 className='preco'>R$ 40,50</h2>

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