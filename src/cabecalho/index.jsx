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
            navigate('/homeinicial')
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
                            </div>



                            <div className='agrupa-panda'>


                                <div className='dilado'>
                                    <span style={{ color: "black" }}>{usuario ? usuario[0].nome.substr(0, 1).toUpperCase() : ''}</span>
                                    <p className='sair-conta' onClick={sairclick}>SAIR DA CONTA</p>
                                </div>

                            </div>

                        </div>

                    </div>

                </nav>


                <div className='agrupa-categorias'>
                    <div className='fundo'>
                        <a className='cor' href="/iluminacoes">ILUMINAÇÃO</a>
                    </div>


                    <div className='fundo'>
                        <a className='cor' href="/Cascatas">CASCATAS</a>
                    </div>

                    <div className='fundo'>
                        <a className='cor' href="/produto">FILTROS</a>
                    </div>

                    <div className='fundo'>
                        <a className='cor' href="/acess">ACESSORIOS</a>
                    </div>
                </div>

            </div>
        </div>
    )



}