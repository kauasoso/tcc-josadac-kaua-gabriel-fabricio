import './index.scss';
import Cabecalho2 from '../cabecalho2';
import Rodape from '../rodape';

export default function HomeAdm() {

return(
    <div className='mae-adm'>
        <Cabecalho2/>
        <div className="container-adm">
            <div className="sub-3">
                 <div className='sub-azul'>
                     <h1>CADASTRO DE PRODUTOS</h1>
                 </div>

                        <div className='sub-azul'>
                            <h1>CONSULTAR PRODUTOS</h1>
                        </div>

                 <div className='sub-azul'>  
                     <h1>PEDIDOS REALIZADOS</h1>
                 </div>
            </div>
        </div>
        <Rodape/>
    </div>
)



}