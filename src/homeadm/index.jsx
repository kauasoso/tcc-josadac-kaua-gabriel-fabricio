import './index.scss';
import Cabecalho2 from '../cabecalho2';
import Rodape from '../rodape';
import { useEffect } from 'react';
import storage from 'local-storage'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';


export default function HomeAdm() {

    const [usuario, setUsuario] = useState('')

    let navigate = useNavigate()

    useEffect(() => {

        if (!storage('adm-logado')) {
            navigate('/loginadm')
        } else {
            const usuarioLogado = storage('adm-logado');
            setUsuario(usuarioLogado)
            console.log(usuarioLogado);
        }

    }, [])




    function sairclick() {
        storage.remove('adm-logado')
        setTimeout(() => {
            navigate('/loginadm')
        }, 1800)

    }


    return (
        <div className='mae-adm'>

            <div className='container'>

                <div className="espaco-1">
                    <div className='logoo'>
                        <img className='logo' src="./assets/image/logomelhor.png" alt="" />
                    </div>
                    <a href='/cadastroproduto' className='agendaa' >
                        <img className='agenda' src="./assets/image/imgCadastroProduto.png" alt="" />
                        <h3>CADASTRO</h3>
                    </a>

                    <div className='agendaa'>
                        <img className='agenda' src="./assets/image/abcagenda.png" alt="" />
                        <h3>PEDIDOS</h3>
                    </div>

                    <a className='agendaa' id='sairconta' onClick={sairclick}>
                        <img className='agenda' src="./assets/image/SAIR.png" alt="" />
                        <h3>SAIR DA CONTA</h3>
                    </a>




                </div>


                <div className="espaco-2">

                    <nav>
                        <div>
                            <h2>Seja Bem-Vindo Administrador, {usuario ? usuario[0].nome : ''} !!</h2>
                        </div>

                        <div className='usuario-p'>
                            <p>NOVOS DADOS</p>
                            <img className='usuario' src="/assets/image/usuario.png" alt="" />
                        </div>

                    </nav>

                    <div className='d9'>

                        <img className='logo-grande' src="/assets/image/logomelhor.png" alt="" />



                    </div> {/* final da tag "d9" */}

                </div>

            </div>



        </div>
    )



}