import './index.scss';


export default function LoginAdmin() {




    return(
        <div className='mae-loginn'>
  
        <div className="container-login">
            <nav>
                <div>
                <img className='img-logo' src="../assets/image/logo.png" alt="" />
                </div>
                    <div className='adm-login'>
                        <img  src="../assets/image/admconfig.png" alt="" />
                        <h3 >ADMINISTRADOR</h3>
                    </div>
            </nav>

 
             <div className='agrupa-tudo'>
                <div className='usuario-login'>
                    <img className='usuario' src="../assets/image/usuario.png" alt="" />
                    <h2>LOGIN DE ADMINISTRADOR</h2>
                </div>
                        
                        <div className='input-login'>
                            <input type="text" placeholder='EMAIL'/>
                            <input type="password" placeholder='SENHA' />
                        </div>

                <div className='agrupa-botao'>

                        <div className='agrupa-p'>
                           <button>VOLTAR</button>
                        </div>

                        <div>
                            <button >ENTRAR</button>
                        </div>
                </div>
                       <div className='erro-login' style={{color: "red"}}></div>
             </div>
              
           

        </div>
    </div>
    )
}