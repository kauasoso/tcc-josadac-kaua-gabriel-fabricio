import Cabecalho from '../../cabecalho'
import Rodape from '../../rodape'
import './index.scss'




export default function Cas4(){





    return(


        <div className='a1'>
        <div>
            <Cabecalho/>
         </div>





         <div className='a2'>
                    <div className='b1'>
                        <img className='filtro2' src="/assets/image/casca-4.png" alt="" />
                    </div>



                    <div className='b2'>
                        <h3 className='titulo'>DUCHA FRIA REDONDA DE ALUMÍNIO</h3>
                        <h5 className='descricao'>A ducha fria redonda de alumínio é um produto versátil e durável, ideal para uso em áreas externas, como piscinas, quintais, saunas, vestiários e outras áreas de lazer. O corpo da ducha é feito de alumínio, um material resistente à corrosão e à oxidação. O acabamento em pintura eletrostática garante uma superfície lisa e brilhante, que é fácil de limpar.</h5>

                        <h2 className='preco'>R$ 867,43</h2>

                        <a className='adetalhes' href="/pedido"> <button className='comprar'>COMPRAR AGORA</button></a>
                        
                    </div>
            
            </div>



                <div className='a3'>

                    <div className='b3'>



                        <div className='c1'>
                            <img className='imagizi' src="/assets/image/casca-1.png" alt="" />
                            <h4 className='ds'>CASCATA EM AÇO INOX</h4>
                            <h5 className='prc'>R$ 4.354,87</h5>
                            <div className='branco'>
                            <h4 className='frete'>FRETE GRÁTIS</h4>
                            <img className='' src="/assets/image/caminhao.png" alt="" />
                        </div>
                        </div>
                        <div className='c2'>
                            <img className='imagizi' src="/assets/image/casca-3.png" alt="" />
                            <h4 className='ds'>CASCATA CISNE EM AÇO INOX</h4>
                            <h5 className='prc'>R$ 5.231,256</h5>
                            <div className='branco'>
                            <h4 className='frete'>FRETE GRÁTIS</h4>
                            <img className='' src="/assets/image/caminhao.png" alt="" />
                        </div>
                        </div>
                        <div className='c3'>
                            <img className='imagizi' src="/assets/image/casca-2.png" alt="" />
                            <h4 className='ds'>CASCATA CISNE EM AÇO INOX</h4>
                            <h5 className='prc'>R$ 5.231,256</h5>
                            <div className='branco'>
                            <h4 className='frete'>FRETE GRÁTIS</h4>
                            <img className='' src="/assets/image/caminhao.png" alt="" />
                        </div>
                        </div>
                        <div className='c4'>
                            <img className='imagizi' src="/assets/image/casca-5.png" alt="" />
                            <h4 className='ds'>DUCHA FRIA DE ALUMÍNIO</h4>
                            <h5 className='prc'>R$ 5.110,42</h5>
                            <div className='branco'>
                            <h4 className='frete'>FRETE GRÁTIS</h4>
                            <img className='' src="/assets/image/caminhao.png" alt="" />
                        </div>
                        </div>


                        
                    </div>
                    
                </div>

            <div className='final'><Rodape/></div>
        </div>
    )
}