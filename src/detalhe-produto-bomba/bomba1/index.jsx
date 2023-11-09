import Cabecalho from '../../cabecalho'
import Rodape from '../../rodape'
import './index.scss'



export default function Bomba1(){



    return(




        <div className='a1'>
        <div>
             <Cabecalho/>
         </div>





         <div className='a2'>
                    <div className='b1'>
                        <img className='filtro2' src="/assets/image/bomba-1.png" alt="" />
                    </div>



                    <div className='b2'>
                        <h3 className='titulo'>BOMBA FILTRANTE<br/> PISCINA INFLÁVEL</h3>
                        <h5 className='descricao'>
Bomba filtrante para piscina inflável é um equipamento essencial para manter a água da piscina limpa e cristalina. O filtro funciona aspirando a água da piscina, passando-a por um cartucho ou filtro de areia, que retém as impurezas, e devolvendo a água limpa para a piscina. A bomba filtrante para piscina inflável é um equipamento essencial para manter a água da piscina limpa e cristalina. Com um pouco de manutenção, sua bomba filtrante funcionará por muitos anos, proporcionando a você e sua família anos de diversão na piscina.</h5>

                        <h2 className='preco'>R$ 2.321,91</h2>

                        <a className='adetalhes' href="/pedido"> <button className='comprar'>COMPRAR AGORA</button></a>
                        
                    </div>
            
            </div>



                <div className='a3'>

                    <div className='b3'>



                        <div className='c1'><a className='adetalheproduto' href="/bomb2">
                            <img className='imagizi' src="/assets/image/bomba-2.png" alt="" />
                            <h4 className='ds'>FILTRO COM CARRINHO </h4>
                            <h5 className='prc'>R$ 7.543.99</h5>
                            <section className='branco'>

<p>FRETE GRÁTIS</p>
<img className='caminhao' src="/assets/image/caminhao.png" alt="" />

</section></a>
                        </div>
                        <div className='c2'><a className='adetalheproduto' href="/bomb3">
                            <img className='imagizi' src="/assets/image/bomba-3.png" alt="" />
                            <h4 className='ds'>KIT BOMBA CV MONOFÁSICA</h4>
                            <h5 className='prc'>R$ 4.186,09</h5>
                            <section className='branco'>

<p>FRETE GRÁTIS</p>
<img className='caminhao' src="/assets/image/caminhao.png" alt="" />

</section></a>
                        </div>
                        <div className='c3'><a className='adetalheproduto' href="/ace4">
                            <img className='imagizi' src="/assets/image/acessorio-4.png" alt="" />
                            <h4 className='ds'>DISPOSITIVO SODRAMAR</h4>
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