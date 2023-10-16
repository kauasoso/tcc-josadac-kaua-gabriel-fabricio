import './index.scss';
import storage from 'local-storage'
import { useNavigate  } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function Cabecalho () {
    
    const [ usuario, setUsuario] = useState({})

    const navigate = useNavigate();


    // useEffect(() => {
 
    //     if (!storage('usuario-logado')) {
    //     navigate('/login')
    //     } else {
    //    const usuarioLogado = storage('usuario-logado');
    //     setUsuario(usuarioLogado)
    //     console.log(usuarioLogado);
    // }
           
        
    //    }, [])


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
                {/* <span>{usuario[0].nome.substr(1,2)}</span>
                <p>Seja Bem-vindo, {usuario[0].nome}!</p> */}

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