import Cabecalho from '../../cabecalho'
import Rodape from '../../rodape'
import './index.scss'







export default function Cas1() {






    return (




        <div className='a1'>
            <div>
                <Cabecalho />
            </div>





            <div className='a2'>
                <div className='b1'>
                    <img className='filtro2' src="/assets/image/casca-1.png" alt="" />
                </div>



                <div className='b2'>
                    <h3 className='titulo'>CASCATA EM AÇO INOX</h3>
                    <h5 className='descricao'>As cascatas em aço inox são um elemento decorativo e funcional para piscinas. Elas proporcionam uma sensação de relaxamento e bem-estar, além de contribuir para a oxigenação da água. As cascatas em aço inox são fabricadas em diversos modelos, tamanhos e formatos. Podem ser instaladas na parede, no teto ou no chão da piscina. O aço inox é um material resistente e durável, que não enferruja. É também um material higiênico, que não acumula sujeira ou bactérias.</h5>

                    <h2 className='preco'>R$ 4.354,87</h2>

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

            <div className='final'><Rodape /></div>
        </div>
    )
}