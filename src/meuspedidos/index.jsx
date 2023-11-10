import './index.scss';
import Card from '../card';
import Cabecalho2 from '../cabecalho2';

export default function Pedido() {
   


    return (
        <div className='mae-pedidos'>
            <Cabecalho2 />
            <div className="containerPedido">

                <h1>CARRINHO</h1>

                <div className='agrupa-card'>
                    <Card />
                    <Card />
                    <Card />
                </div>
               
            </div>

            <div className='subtotal'>
                <div className='sub2'>
                    <h3>SUB-TOTAL: R$ 7.390,00</h3>
                </div>

                <nav className='comprar'>
                    <button>COMPRAR</button>
                </nav>

            </div>



        </div>
    )
}