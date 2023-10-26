import './index.scss';
import Cabecalho2 from '../cabecalho2';
import Rodape from '../rodape';

export default function MinhaConta(){

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
                  <input type="text" placeholder='EMAIL' />
                </div>

           <div className="mudar">
                <p>MUDAR EMAIL</p>
                <div className='line'></div>
           </div>

       </div>


       <div className='input-principal'>

{/*  */}
                <div className="input1">
                  <p>Senha</p>
                  <input type="password" placeholder='**************' />
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
                  <input type="text" placeholder='+55 (11) 9 9123-4567' />
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
                                <input type="text" placeholder='Fabrício Gabriel' />
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