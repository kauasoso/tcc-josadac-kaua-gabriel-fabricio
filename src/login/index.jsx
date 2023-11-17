import { useState , useRef } from 'react';
import axios from 'axios';
import './index.scss' ;
import { useNavigate } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'
import { useEffect } from 'react';
import storage from 'local-storage';
import { url } from '../url-api';

export function Login () {

    const ref = useRef();
    const navigate = useNavigate();

const [email , setEmail] = useState('');
const [senha , setSenha] = useState('');
const [erro, setErro] = useState([])
const [carregando, setCarregando] = useState (false)


useEffect(() =>{
   if (storage('usuario-logado')) {
    navigate('/home')
   }
},[])



async function Entrar() {

   ref.current.continuousStart()
   setCarregando(true)

    try{

    let pessoa = {
        email: email ,
        senha: senha
    }

    let r = await axios.post(url,pessoa)
   storage('usuario-logado', r.data)

    setTimeout(() => {
        navigate('/home')
        },2500)



}catch(err) {
    setCarregando(false)
    ref.current.complete()
    if(err.response.status === 404) {
        setErro(err.response.data.erro)
    }
}

}

function verificarTecla(e){
    if(e.key == 'Enter'){
        Entrar()
    }
}


    

return (
    <div className='mae-login'>
        <LoadingBar color='#6ffeff' ref={ref} />
        <div className="container-login">
            <nav>
                <div>
                <img className='img-logo' src="../assets/image/logo.png" alt="" />
                </div>
                    <a href='/loginadm' className='adm-login' >
                        <img src="../assets/image/admconfig.png" alt="" />
                        <h3 >ADMINISTRADOR</h3>
                    </a>


            </nav>

 
             <div className='agrupa-tudo'>
                <div className='usuario-login'>
                    <img className='usuario' src="../assets/image/usuario.png" alt="" />
                    <h2>LOGIN</h2>
                </div>
                        
                        <div className='input-login'>
                            <input className='inpl' type="text" onKeyDown={(e) => verificarTecla(e)} placeholder='EMAIL' value={email} onChange={e => setEmail (e.target.value)}/>
                            <input className='inpl' type="password" onKeyDown={(e) => verificarTecla(e)}  placeholder='SENHA' value={senha} onChange={e => setSenha (e.target.value)}/>
                        </div>

                <div className='agrupa-botao'>

                        <div className='agrupa-p'>
                            <a>ESQUECI A SENHA</a>
                            <a href="/cadastro">CADASTRE-SE</a>
                        </div>


                        <div className='bte'>
                            <button onClick={Entrar} disabled={carregando}>ENTRAR</button>
                        </div>
                </div>
                       <div className='erro-login' style={{color: "red"}}>{erro}</div>
             </div>
              
           

        </div>
    </div>
)


}
