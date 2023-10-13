import './index.scss';
import storage from 'local-storage'
import { useNavigate } from 'react-router-dom';

export default function Cabecalho () {
    

    const navigate = useNavigate();



    function sairclick() {
        storage.remove('usuario-logado')
        navigate('/login')
    }

    
return (
<div className="mae">
    <div className="container">
        <nav className='cabecalho'>
            <img className='logo' src="./assets/image/pool-max-logo.png" alt="" />
            <input className='encontre'  type="text" placeholder='ENCONTRE SEU PRODUTO' />
            <img className='lupa' src="./assets/image/lupa.png" alt="" />

            <div className='carrinho'>
                <img className='azulcarro' src="./assets/image/carrinho.png" alt="" />
                <p>(0) ITEMS</p>
            </div>

            <div className='agrupa-panda'>
                <span>F</span>
                <p>Seja Bem-vindo, Fabrício!</p>

                <p className='sair-conta' onClick={sairclick}>SAIR DA CONTA</p>
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