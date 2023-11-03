import './index.scss';


export default function CabecalhoSemapi() {

return (
    <div className='mae-cabecalhosemapi'>
        <nav>

            <div className=''>
                <img className='logo' src="./assets/image/logomelhor.png" alt="" />
            </div>

            <div className='agrupa-a'>
                <a className='ab' href="/login">ENTRAR</a>
                <a href="/cadastro" className='cd'>CADASTRAR</a>
                <a href="/loginadm" className="ef">ADMINISTRADOR</a>
            </div>

        </nav>
    </div>
)


}