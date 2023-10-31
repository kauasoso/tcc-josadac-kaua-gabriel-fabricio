import './index.scss';
import storage from 'local-storage'
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';



export default function Cabecalho() {

    const [usuario, setUsuario] = useState()

    const navigate = useNavigate();


    useEffect(() => {

        if (!storage('usuario-logado')) {
            navigate('/login')
        } else {
            const usuarioLogado = storage('usuario-logado');
            setUsuario(usuarioLogado)
            console.log(usuarioLogado);
        }


    }, [])


    function sairclick() {
        storage.remove('usuario-logado')
        setTimeout(() => {
            navigate('/')
        }, 1800)

    }


    return (
        <div className="mae">
            <div className="container">

                <nav className='cabecalho'>
                    <a href="/"><img className='logo' src="./assets/image/pool-max-logo.png" alt="" /></a>



                    <div className='agrupa-pandaa'>



            <div className='agrupa-panda'>

                            <div className='carrinho'>
                                <a href="/pedido"><img className='azulcarro' src="./assets/image/carrinho.png" alt="" /></a>
                                <p>(0) ITEMS</p>
                            </div>


                            <div className='agrupa-panda'>


                                <div>
                                    <span style={{ color: "black" }}>{usuario ? usuario[0].nome.substr(0, 1).toUpperCase() : ''}</span>
                                    <p>Seja Bem-vindo, {usuario ? usuario[0].nome : ''}!</p>
                                    <p className='sair-conta' onClick={sairclick}>SAIR DA CONTA</p>
                                </div>

                            </div>

                        </div>

                    </div>

                </nav>


                <div className='agrupa-categorias'>
                    <div className='fundo'>
                    <p>AQUECIMENTO</p>
                        <p>AQUECIMENTO</p>
                    </div>

                    <div className='fundo'>
                        <p>SAUNAS</p>
                        <p> SAUNAS</p>
                    </div>


                    <div className='fundo'>
                        ILUMINAÇÃO
                    </div>

                    <div className='fundo'>
                        <p> PISOS </p>
                    </div>
                </div>
            </div>
        </div>

    )



}