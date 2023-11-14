import './index.scss';
import Cabecalho2 from '../cabecalho2';
import Rodape from '../rodape';
import { useState } from 'react';
import { useEffect } from 'react';
import storage from 'local-storage'



export default function MinhaConta(){

const [desativado , setDesativado] = useState (true);
const [usuario , setUsuario] = useState ()


  useEffect(() => {

        const usuarioLogado = storage('usuario-logado');
        setUsuario(usuarioLogado)
        console.log(usuarioLogado);
}, [])





 async function MudarEmail() {
setDesativado(false)
}

return(
<div className="mae-minhaconta">
    <Cabecalho2/>

 <div className='container'>
    <div className='agrupa-panda'>
        <h1>MINHA CONTA</h1>
    </div>

     <div className='panda-camera'>
        <img className='panda' src="./assets/image/panda.png" alt=""/>
        <img className='camera' src="./assets/image/cameraazul.png" alt="" />
     </div>

  
     <div className="agrupa-inputs">
       <h4>Dados Pessoais:</h4>

       <div className='input-principal'>


{/*  */}
                <div className="input1">
                  <p>Email</p>
                  <input disabled={desativado} type="text" placeholder={usuario ? usuario[0].email : '' } />
                </div>

           <div className="mudar">
                <p onClick={MudarEmail}>MUDAR EMAIL</p>
                <div className='line'></div>
           </div>

       </div>


       <div className='input-principal'>

{/*  */}
                <div className="input1">
                  <p>Senha</p>
                  <input disabled={desativado} type="password" placeholder='* * * * * * * * * * * * * *' />
                </div>

           <div className="mudar">
                <p>MUDAR SENHA</p>
                <div className='line'></div>
           </div>
           
       </div>


       <div className='input-principal'>

{/*  */}
                <div className="input1">
                  <p>Número</p>
                  <input disabled={desativado} type="text" placeholder='+55 (11) 9 9123-4567' />
                </div>

           <div className="mudar">
                <p>MUDAR O N°°°</p>
                <div className='line-n'></div>
           </div>
           
       </div>

     </div>

   

                <div className="agrupa-inputs">
                      <h4>Dados Da Conta:</h4>
                    <div className='input-principal'>

                {/*  */}
                                <div className="input1">
                                <p>Nome de Exibição</p>
                                <input disabled={desativado}  type="text" placeholder={usuario ? usuario[0].nome : '' } />
                                </div>

                        <div className="mudar">
                                <p>MUDAR NOME</p>
                                <div className='line'></div>
                        </div>
                        
                    </div>
                    </div>
                  
 </div>
 <Rodape/>
</div>
)


}