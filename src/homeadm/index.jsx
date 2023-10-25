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
                     <a href="/cadastroproduto" className='H1'> CADASTRAR PROUTO </a>
                 </div>
                 
                        <div className='sub-azul'>
                            <a href="/consultaproduto" className='H1' > CONSULTAR PRODUTOS </a>
               
                            
                        </div>

                 <div className='sub-azul'>  
                     <a href="/realizados" className='H1' > PEDIDOS REALIZADOS </a>
                 </div>
            </div>
        </div>
        <Rodape/>
    </div>
)



}