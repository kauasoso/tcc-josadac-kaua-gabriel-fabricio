import Cabecalho from '../../cabecalho'
import Rodape from '../../rodape'
import './index.scss'



export default function Cas2(){



    return(


        <div className='a1'>
        <div>
            <Cabecalho/>
         </div>





         <div className='a2'>
                    <div className='b1'>
                        <img className='filtro2' src="/assets/image/casca-2.png" alt="" />
                    </div>



                    <div className='b2'>
                        <h3 className='titulo'>CASCATA CISNE EM AÇO INOX</h3>
                        <h5 className='descricao'>A cascata cisne em aço inox é um item de decoração e lazer para piscinas. Ela é produzida em aço inoxidável escovado, que é um material resistente à corrosão e à ferrugem. O cisne possui um design moderno e elegante, que valoriza e embeleza a área de lazer. A cascata é composta por um corpo em formato de cisne, com uma cabeça que lança a água. A água cai em um reservatório, que é conectado à piscina por meio de uma mangueira. A vazão da água é regulável, permitindo que o usuário ajuste o volume do fluxo. </h5>

                        <h2 className='preco'>R$ 5.231,256</h2>

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