import Cabecalho from '../../cabecalho'
import RodapePrd from '../../rodape'
import './index.scss'






export default function Pis6(){






    return(



        <div className='a1'>
        <div>
            <Cabecalho/>
        </div>

        <div className='a2'>
            <div className='b1'>
                <img className='filtro2' src="/assets/image/piso-6.png" alt="" />
            </div>



            <div className='b2'>
                <h3 className='titulo'>REVESTIMENTO PARA <br/>PISCINA POOL DARK</h3>

                <h5 className='descricao'>
O Revestimento para Piscina Pool Dark Blue 14x14cm Artens é uma ótima opção para quem busca um acabamento elegante e sofisticado para sua piscina. Fabricado em porcelanato, ele é resistente à água, às manchas e aos produtos químicos, garantindo durabilidade e facilidade de manutenção. O revestimento possui uma estampa super-realista que reproduz o efeito de uma pedra natural, com um tom azul escuro intenso. Isso confere à piscina um visual moderno e aconchegante, ideal para relaxar e aproveitar os dias de sol.</h5>

                <h2 className='preco'>R$ 689,99</h2>

                <a className='adetalhes' href="/pedido"> <button className='comprar'>COMPRAR AGORA</button></a>
              
            </div>

        </div>


        <div className='a3'>

            <div className='b3'>


                <div className='c1'>
                    <img className='imagizi' src="/assets/image/piso-1.png" alt="" />
                    <h4 className='ds'>REVESTIMENTO PISCINA JABOTA</h4>
                    <h5 className='prc'>R$ 432,29</h5>

                    <div className='branco'>
                            <h4 className='frete'>FRETE GRÁTIS</h4>
                            <img className='' src="/assets/image/caminhao.png" alt="" />
                        </div>

                </div>
                <div className='c2'>
                    <img className='imagizi' src="/assets/image/piso-2.png" alt="" />
                    <h4 className='ds'>REVESTIMENTO PISCINA ELIANE</h4>
                    <h5 className='prc'>R$ 217,99</h5>
                    <div className='branco'>
                            <h4 className='frete'>FRETE GRÁTIS</h4>
                            <img className='' src="/assets/image/caminhao.png" alt="" />
                        </div>
                </div>
                <div className='c3'>
                    <img className='imagizi' src="/assets/image/piso-3.png" alt="" />
                    <h4 className='ds'>REVESTIMENTO PISCINA FERREIRA</h4>
                    <h5 className='prc'>R$ 319,36</h5>
                    <div className='branco'>
                            <h4 className='frete'>FRETE GRÁTIS</h4>
                            <img className='' src="/assets/image/caminhao.png" alt="" />
                        </div>
                </div>
                <div className='c4'>
                    <img className='imagizi' src="/assets/image/piso-4.png" alt="" />
                    <h4 className='ds'>REVESTIMENTO PISCINA ELIANE </h4>
                    <h5 className='prc'>R$ 423,13</h5>
                    <div className='branco'>
                            <h4 className='frete'>FRETE GRÁTIS</h4>
                            <img className='' src="/assets/image/caminhao.png" alt="" />
                        </div>
                </div>



            </div>

        </div>

        <div className='final'><RodapePrd/></div>

    </div>

    )
}