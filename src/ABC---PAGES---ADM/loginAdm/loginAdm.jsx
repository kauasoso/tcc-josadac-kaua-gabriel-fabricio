import { useState , useRef } from 'react';
import LoadingBar from 'react-top-loading-bar'
import './index.scss';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';




export default function LoginAdmin() {

const [email , setEmail]= useState('')
const  [senha, setSenha] = useState('')
const   [erro , setErro]  = useState([])
const [carregando,setCarregando] = useState(false)

 const ref = useRef()
 const navigate = useNavigate();

async function TelaAdm() {

   
    ref.current.continuousStart()
    setCarregando(true)
 
     try{
     let url = 'http://localhost:5001/adm';
 
     let pessoa = {
         email: email ,
         senha: senha
     }
 
     let r = await axios.post(url,pessoa)
   
 
     setTimeout(() => {
         navigate('/homeadm')
         },2500)
 
 
 
 }catch(err) {
     setCarregando(false)
     ref.current.complete()
     if(err.response.status === 404) {
         setErro(err.response.data.erro)
     }
 }

}


    return(
        <div className='mae-loginn'>
   <LoadingBar color='#f11946' ref={ref} />
        <div className="container-login">
            <nav>
                <div>
                <img className='img-logo' src="../assets/image/logo.png" alt="" />
                </div>
                   
            </nav>

 
             <div className='agrupa-tudo'>
                <div className='usuario-login'>
                    <img className='usuario' src="../assets/image/usuario.png" alt="" />
                    <h2>LOGIN DE ADMINISTRADOR</h2>
                </div>
                        
                        <div className='input-login'>
                            <input type="text" placeholder='EMAIL' value={email} onChange={e => setEmail(e.target.value)}/>
                            <input type="password" placeholder='SENHA' value={senha} onChange={e => setSenha(e.target.value)} />
                        </div>

                <div className='agrupa-botao'>

                        <div className='agrupa-p'>
                           <button>VOLTAR</button>
                        </div>

                        <div>
                            <button onClick={TelaAdm} disabled={carregando} >ENTRAR</button>
                        </div>
                </div>
                       <div className='erro-login' style={{color: "red"}}>{erro}</div>
             </div>
              
           

        </div>
    </div>
    )
}