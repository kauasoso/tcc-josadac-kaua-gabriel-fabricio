import './index.scss';
import Cabecalho2 from '../cabecalho2';
import Rodape from '../rodape';

function Realizados() {



    return (
        <div className="principal">

            <Cabecalho2 />

            <div className='corpo-pt1'>
                <div>
                    <h1> PEDIDOS REALIZADOS </h1>
                </div>
                <div className='corpo-pt2'>
                    <div className='imagens'>
                        <img src="./assets/image/imgUsuarios.webp" alt="" />
                        <p> usuario email </p>
                    </div>

                    <div className='imagens'>
                        <img src="./assets/image/imgUsuarios.webp" alt="" />
                        <p> usuario email </p>
                    </div>

                    <div className='imagens'>
                        <img src="./assets/image/imgUsuarios.webp" alt="" />
                        <p> usuario email </p>
                    </div>

                    <div className='imagens'>
                        <img src="./assets/image/imgUsuarios.webp" alt="" />
                        <p> usuario email </p>
                    </div>
                </div>
            </div>

            <div className='corpo-pt2'>

                <div className="imagens">
                    <img src="./assets/image/imgUsuarios.webp" alt="" />
                    <p> usuario email </p>
                </div>

                <div className="imagens">
                    <img src="./assets/image/imgUsuarios.webp" alt="" />
                    <p> usuario email </p>
                </div>

                <div className="imagens">
                    <img src="./assets/image/imgUsuarios.webp" alt="" />
                    <p> usuario email </p>
                </div>

                <div className="imagens">
                    <img src="./assets/image/imgUsuarios.webp" alt="" />
                    <p> usuario email </p>
                </div>




            </div>

            <div className='corpo-pt2'>
                <div className="imagens">
                    <img src="./assets/image/imgUsuarios.webp" alt="" />
                    <p> usuario email </p>
                </div>

                <div className="imagens">
                    <img src="./assets/image/imgUsuarios.webp" alt="" />
                    <p> usuario email </p>
                </div>

                <div className="imagens">
                    <img src="./assets/image/imgUsuarios.webp" alt="" />
                    <p> usuario email </p>
                </div>

                <div className="imagens">
                    <img src="./assets/image/imgUsuarios.webp" alt="" />
                    <p> usuario email </p>
                </div>
            </div>

            <Rodape />
        </div>
    );
}

export default Realizados;
