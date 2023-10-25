import './index.scss';
import Cabecalho2 from '../cabecalho2';
import Rodape from '../rodape';

export default function HomeAdm() {

return(
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

                         <a href='/consultaproduto' className='agendaa'>
                            <img className='agenda' src="./assets/image/imgLupaConsulta.png" alt="" />
                            <h3>CONSULTA</h3>
                         </a>
                <div className='agendaa'>
                    <img className='agenda' src="./assets/image/abcagenda.png" alt="" />
                    <h3>PEDIDOS</h3>
                </div>

            </div>


                 <div className="espaco-2">
                    
                    <nav> 
                      <div>
                        <h2>Seja Bem-Vindo , Admin !!</h2>
                      </div>

                      <div className='usuario-p'>
                        <p>NOVOS DADOS</p>
                        <img className='usuario' src="./assets/image/usuario.png" alt="" />
                      </div>

                    </nav>

                    <div className='d9'>
                        <img className='logo-grande' src="./assets/image/logomelhor.png" alt="" />
                    </div>

                 </div>

        </div>

    </div>
)



}