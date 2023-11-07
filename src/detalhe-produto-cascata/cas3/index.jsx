import Cabecalho from '../../cabecalho'
import Rodape from '../../rodape'
import './index.scss'




export default function Cas3(){





    return(



        <div className='a1'>
        <div>
            <Cabecalho/>
         </div>





         <div className='a2'>
                    <div className='b1'>
                        <img className='filtro2' src="/assets/image/casca-3.png" alt="" />
                    </div>



                    <div className='b2'>
                        <h3 className='titulo'>CASCATA IMPERIS EM AÇO</h3>
                        <h5 className='descricao'>A Cascata Imperatis em aço é uma obra de arte monumental localizada no Palácio de Peterhof, na Rússia. Ela foi construída em 1724 por ordem do czar Pedro, o Grande, e é uma das mais famosas atrações turísticas do país. A cascata é composta por três partes principais: a cascata superior, a cascata média e a cascata inferior. A cascata superior é a maior e mais imponente, com um desnível de 20 metros. Ela é formada por uma série de rampas de aço que conduzem a água para a cascata média.</h5>

                        <h2 className='preco'>R$ 2.432,46</h2>

                        <a className='adetalhes' href="/pedido"> <button className='comprar'>COMPRAR AGORA</button></a>
                       
                    </div>
            
            </div>



                <div className='a3'>

                    <div className='b3'>


                    <img className='setaesquerda' src="/assets/images/setaesquerda.png" alt="" />

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
                            <img className='imagizi' src="/assets/image/casca-2.png" alt="" />
                            <h4 className='ds'>CASCATA CISNE EM AÇO INOX</h4>
                            <h5 className='prc'>R$ 5.231,256</h5>
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