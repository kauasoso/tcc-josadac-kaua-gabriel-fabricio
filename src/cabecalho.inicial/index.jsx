import './index.scss';

export default function CabecalhoInicial () {

return (
<div className="mae-cabecalhoinicial">
    <div className="container">
        <nav className='cabecalho'>
            <a href="/"><img className='logo' src="./assets/image/pool-max-logo.png" alt="" /></a>
            <input className='encontre'  type="text" placeholder='ENCONTRE SEU PRODUTO' />
            <img className='lupa' src="./assets/image/lupa.png" alt="" />

           <div className='sub-cabe-inicial'>
              <a href="">Login</a>
              <a href="">Cadastre-se</a>
           </div>

        </nav>



        <div className='agrupa-categorias'>
           <div className='fundo'>
               AQUECIMENTO
           </div>

                <div className='fundo'>
                    SAUNAS
                </div>

                        <div className='fundo'>
                          ILUMINAÇÃO
                        </div>

            <div className='fundo'>
               PISOS E REVESTIMENTOS
            </div>
        </div>
    </div>
</div>

)



}