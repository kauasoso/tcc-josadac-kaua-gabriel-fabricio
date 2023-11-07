import Cabecalho from '../../cabecalho'
import Rodape from '../../rodape'
import './index.scss'




export default function Cas6(){





    return (


        <div className='a1'>
        <div>
            <Cabecalho/>
         </div>





         <div className='a2'>
                    <div className='b1'>
                        <img className='filtro2' src="/assets/image/casca-6.png" alt="" />
                    </div>



                    <div className='b2'>
                        <h3 className='titulo'>DUCHA QUENTE QUADRADA</h3>
                        <h5 className='descricao'>A água quente cai em cascata sobre o corpo, formando um quadrado perfeito. O vapor sobe, criando uma atmosfera de conforto e relaxamento. O cheiro de sabonete e shampoo se mistura ao ar, criando uma sensação de bem-estar. Os olhos se fecham e a mente se desliga. O estresse do dia a dia vai embora, substituído por uma sensação de paz e tranquilidade. O corpo se aquece e os músculos se relaxam.</h5>

                        <h2 className='preco'>R$ 758,33</h2>

                        <a className='adetalhes' href="/pedido"> <button className='comprar'>COMPRAR AGORA</button></a>
                   
                    </div>
            
            </div>



                <div className='a3'>

                    <div className='b3'>



                        <div className='c1'>
                            <img className='imagizi' src="/assets/image/casca-2.png" alt="" />
                            <h4 className='ds'>CASCATA CISNE EM AÇO INOX</h4>
                            <h5 className='prc'>R$ 5.231,256</h5>
                            <div className='branco'>
                            <h4 className='frete'>FRETE GRÁTIS</h4>
                            <img className='' src="/assets/image/caminhao.png" alt="" />
                        </div>
                        </div>
                        <div className='c2'>
                            <img className='imagizi' src="/assets/image/casca-3.png" alt="" />
                            <h4 className='ds'>CASCATA IMPERIS EM AÇO</h4>
                            <h5 className='prc'>R$ 2.432,46</h5>
                            <div className='branco'>
                            <h4 className='frete'>FRETE GRÁTIS</h4>
                            <img className='' src="/assets/image/caminhao.png" alt="" />
                        </div>
                        </div>
                        <div className='c3'>
                            <img className='imagizi' src="/assets/image/casca-4.png" alt="" />
                            <h4 className='ds'>DUCHA FRIA REDONDA </h4>
                            <h5 className='prc'>R$ 867,43</h5>
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