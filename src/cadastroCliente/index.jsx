
import { useState, useRef } from 'react';
import axios from 'axios';
import './index.scss';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import LoadingBar from 'react-top-loading-bar';
import storage from 'local-storage';
import { useEffect } from 'react';


export default function Cadastro() {

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [erro, setErro] = useState([])
    const [carregando, setCarregando] = useState(false)

    const navigate = useNavigate();
    const ref = useRef();

    useEffect(() =>{
        if (storage('usuario-logado')) {
         navigate('/home')
        }
        
     },[])

    async function CadastrarCliente() {
        ref.current.continuousStart()
        setCarregando(true)
        try {


            const url = `http://localhost:5001/cadastrocliente`;
            const pessoa = {
                nome: nome,
                email: email,
                senha: senha
            }


            
            const r = await axios.post(url, pessoa)
            storage('usuario-logado', r.data)

            setTimeout(() => {
                navigate('/home')
                },3000)



        } catch (err) {
            ref.current.complete()
            setCarregando(false)
            if (err.response.status === 401) {
                setErro(err.response.data.erro)
            }
        }

    }


    function verificarTecla(e){
        if(e.key == 'Enter'){
            CadastrarCliente()
        }
    }


    return (
        <div className='mae-login'>
            <LoadingBar color='#f11946' ref={ref} />
            <ToastContainer />
            <div className="container-login">
                <nav>
                    <div>
                        <img className='img-logo' src="../assets/image/logomelhor.png" alt="" />
                    </div>
                  
                </nav>


                <div className='agrupa-tudo'>
                    <div className='agrupa-cadastro'>
                        <img className='usuario' src="../assets/image/usuario.png" alt="" />
                        <h2>CADASTRO</h2>
                    </div>

                    <div className='input-login'>
                        <input type="text" onKeyDown={(e) => verificarTecla(e)} placeholder='NOME COMPLETO' value={nome} onChange={e => setNome(e.target.value)} />
                        <input type='text' onKeyDown={(e) => verificarTecla(e)} placeholder='EMAIL' value={email} onChange={e => setEmail(e.target.value)} />
                        <input type="password" onKeyDown={(e) => verificarTecla(e)} placeholder='SENHA' value={senha} onChange={e => setSenha(e.target.value)} />
                    </div>

                    <div className='agrupa-botao-cadastro'>

                        <div className='entrar-cadastro'>
                            <button onClick={CadastrarCliente} disabled={carregando}>CADASTRAR</button>
                        </div>

                        <div className='erro-cadastro' style={{ color: "red" }}>{erro}</div>

                    </div>

                </div>


            </div>
        </div>
    )


}
