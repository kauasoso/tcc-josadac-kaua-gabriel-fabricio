
import './index.scss'
import Cabecalho2 from '../../cabecalho2'


export default function ConsultaProduto(){
    return(
    <div className='mae1'>   
<Cabecalho2/>
        <div className='fundaozao'>
              <div className='corpao'>
                    <h1>CONSULTA DO PRODUTO</h1>
                    
                   <div className='semititulo'>
                         <input className='inputzao' type="text" placeholder='NOME DE PRODUTO' />
                           <button className='butao'> CONFIRME</button>
                           <img className='certo' src="" alt="" />
                   </div>



                   <div className='img-produtao'>
                      <img className='preto' src="" alt="" />
                    </div>
                       <div className='agrupa-letrao'>
                           <h2 className='letrao'>IMAGEM DO PRODUTO</h2>
                           <div className='linhao'></div>

                        </div>

                    <div className='agrupa-qua'>
                        <input className='ipt1' type="Number" placeholder='VALOR DO PRODUTO' />
                        <input className='ipt1' type="Number" placeholder='CÓDIGO DO PRODUTO' />
                        <input className='ipt1' type="Number" placeholder='EM ESTOQUE' />
                        
                        <div className='two-button'>
                          <button className='editar'>EDITAR</button>
                          <button className='editar'>REMOVER</button>
                        </div>

                        <button className='confirmar'>CONFIRMAR <img className='ct' src="" alt="" /></button>  

                    </div>

                    


              
              </div>
         
        </div>


    </div>
    )
}