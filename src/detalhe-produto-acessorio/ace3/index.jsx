import Cabecalho from '../../cabecalho'
import Rodape from '../../rodape'
import './index.scss'





export default function Ace3(){




    return(



        <div className='a1'>
        <div>
             <Cabecalho/>
         </div>





         <div className='a2'>
                    <div className='b1'>
                        <img className='filtro2' src="/assets/image/acessorio-3.png" alt="" />
                    </div>



                    <div className='b2'>
                        <h3 className='titulo'>PENEIRA SODRAMAR <br/> ARMAÇÃO METÁLICA</h3>
                        <h5 className='descricao'>A Peneira Sodramar Tipo Puça com Armação Metálica é um acessório indispensável para a limpeza de piscinas. Ela é indicada para a remoção de folhas, insetos, galhos e outros detritos que podem cair na água. A peneira possui uma armação metálica resistente, que garante maior durabilidade. A bolsa em nylon é de alta qualidade e possui malha fina, que retém até mesmo as sujeiras mais finas.</h5>

                        <h2 className='preco'>R$ 35,10</h2>

                        <a className='adetalhes' href="/pedido"> <button className='comprar'>COMPRAR AGORA</button></a>
                       
                    </div>
            
            </div>



                <div className='a3'>

                    <div className='b3'>



                        <div className='c1'><a className='adetalheproduto' href="/ace1">
                            <img className='imagizi' src="/assets/image/acessorio-1.png" alt="" />
                            <h4 className='ds'>TAMPA AUTOMÁTICO </h4>
                            <h5 className='prc'>R$50,40</h5>
                            <div className='branco'>
                            <h4 >FRETE GRÁTIS</h4>
                            <img className='' src="/assets/image/caminhao.png" alt="" />
                        </div></a>
                        </div>
                        <div className='c2'><a className='adetalheproduto' href="/ace2">
                            <img className='imagizi' src="/assets/image/acessorio-2.png" alt="" />
                            <h4 className='ds'>RALO QUEBRA ONDA LATÃO </h4>
                            <h5 className='prc'>R$ 76,50</h5>
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