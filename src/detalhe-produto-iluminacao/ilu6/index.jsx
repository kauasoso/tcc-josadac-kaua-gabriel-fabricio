import Cabecalho from '../../cabecalho'
import Rodape from '../../rodape'
import './index.scss'





export default function Ilu6(){




    return(


        <div className='a1'>
        <div>
            <Cabecalho/>
         </div>





         <div className='a2'>
                    <div className='b1'>
                        <img className='filtro2' src="/assets/image/ilu-6.png" alt="" />
                    </div>



                    <div className='b2'>
                        <h3 className='titulo'>REFLETOR SMALL LED'S EM INOX DE 1/2</h3>
                        <h5 className='descricao'>O refletor small LED's em inox de 1/2 é um produto ideal para a iluminação de piscinas. Possui corpo em aço inox 316, que garante alta resistência à corrosão e infiltrações. A lente em policarbonato é resistente aos raios UV e possui um ângulo de abertura de 150 graus, proporcionando uma iluminação uniforme. O refletor small LED's em inox de 1/2 está disponível nas potências de 10W, 20W e 30W, com opções de luz branca, luz branca morna ou luz RGB. A potência de 10W é ideal para piscinas de pequeno porte, enquanto as potências de 20W e 30W são recomendadas para piscinas de médio e grande porte.</h5>

                        <h2 className='preco'>R$185,00</h2>

                        <a className='adetalhes' href="/pedido"> <button className='comprar'>COMPRAR AGORA</button></a>
                      
                    </div>
            
            </div>



                <div className='a3'>

                    <div className='b3'>



                        <div className='c1'>
                            <img className='imagizi' src="/assets/image/ilu-1.png" alt="" />
                            <h4 className='ds'>REFLETOR GLOBAL</h4>
                            <h5 className='prc'>R$320,00</h5>
                            <div className='branco'>
                            <h4 className='frete'>FRETE GRÁTIS</h4>
                            <img className='' src="/assets/image/caminhao.png" alt="" />
                        </div>
                        </div>
                        <div className='c2'>
                            <img className='imagizi' src="/assets/image/ilu-2.png" alt="" />
                            <h4 className='ds'>REFLETOR R125</h4>
                            <h5 className='prc'>R$345,90</h5>
                            <div className='branco'>
                            <h4 className='frete'>FRETE GRÁTIS</h4>
                            <img className='' src="/assets/image/caminhao.png" alt="" />
                        </div>
                        </div>
                        <div className='c3'>
                            <img className='imagizi' src="/assets/image/ilu-3.png" alt="" />
                            <h4 className='ds'>REFLETOR SUPER LED'S G</h4>
                            <h5 className='prc'>R$390,00</h5>
                            <div className='branco'>
                            <h4 className='frete'>FRETE GRÁTIS</h4>
                            <img className='' src="/assets/image/caminhao.png" alt="" />
                        </div>
                        </div>
                        <div className='c4'>
                            <img className='imagizi' src="/assets/image/ilu-4.png" alt="" />
                            <h4 className='ds'>REFLETOR SUPER SMD G</h4>
                            <h5 className='prc'>R$330,00</h5>
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