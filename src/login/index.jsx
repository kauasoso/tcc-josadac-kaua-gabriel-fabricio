import { useState , useRef } from 'react';
import axios from 'axios';
import './index.scss' ;
import { useNavigate } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'
import { useEffect } from 'react';
 import storage from 'local-storage';

export function Login () {

    const ref = useRef();
    const navigate = useNavigate();

const [email , setEmail] = useState('');
const [senha , setSenha] = useState('');
const [erro, setErro] = useState([])
const [carregando, setCarregando] = useState (false)


useEffect(() =>{
   if (storage('usuario-logado')) {
    navigate('/')
   }
},[])



async function Entrar() {

   ref.current.continuousStart()
   setCarregando(true)

    try{
    let url = 'http://localhost:5001/login';

    let pessoa = {
        email: email ,
        senha: senha
    }

    let r = await axios.post(url,pessoa)
   storage('usuario-logado', r)

    setTimeout(() => {
        navigate('/')
        },3000)



}catch(err) {
    setCarregando(false)
    ref.current.complete()
    if(err.response.status === 404) {
        setErro(err.response.data.erro)
    }
}

}

    

return (
    <div className='mae-login'>
        <LoadingBar color='#f11946' ref={ref} />
        <div className="container-login">
            <nav>
                <div>
                <img className='img-logo' src="../assets/image/logo.png" alt="" />
                </div>
                    <div className='adm-login'>
                        <img src="../assets/image/admconfig.png" alt="" />
                        <h3 >ADMINISTRADOR</h3>
                    </div>
            </nav>

 
             <div className='agrupa-tudo'>
                <div className='usuario-login'>
                    <img className='usuario' src="../assets/image/usuario.png" alt="" />
                    <h2>LOGIN</h2>
                </div>
                        
                        <div className='input-login'>
                            <input type="text" placeholder='EMAIL' value={email} onChange={e => setEmail (e.target.value)}/>
                            <input type="password" placeholder='SENHA' value={senha} onChange={e => setSenha (e.target.value)}/>
                        </div>

                <div className='agrupa-botao'>

                        <div className='agrupa-p'>
                            <p>ESQUECI A SENHA</p>
                            <a href="/cadastro">CADASTRE-SE</a>
                        </div>

                        <div>
                            <button onClick={Entrar} disabled={carregando}>ENTRAR</button>
                        </div>
                </div>
                       <div className='erro-login' style={{color: "red"}}>{erro}</div>
             </div>
              
           

        </div>
    </div>
)


}
