import Cabecalho2 from '../cabecalho2';
import Rodape from '../rodape';
import './index.scss';

export default function Sobrenos() {
    return (
        <div className='pagina'>
            <div className='cabecalho'>
                <Cabecalho2 />
            </div>
            <div className='centro'>
                <h1>Sobre Nós</h1>
            </div>

            <div className='textos'>

                <div className='corpo2'>

                    
                    <div className='divi'>
                        Bem-vindo à Pool Max, onde transformamos sonhos aquáticos em realidade. Com uma paixão inabalável pela excelência e um compromisso inigualável com a satisfação do cliente, somos uma empresa dedicada a criar espaços aquáticos que não apenas refletem a beleza da natureza, mas também proporcionam um oásis de tranquilidade e diversão.
                    </div>

                    <div className='divi'>
                        Fundada em 20232, a Pool Max emergiu como líder na indústria de piscinas, destacando-se por nossa inovação, artesanato impecável e serviço personalizado. Nossa jornada começou com a visão de oferecer mais do que simples piscinas; buscamos proporcionar experiências únicas que enriqueçam a vida de nossos clientes.
                    </div>

                    <div className='divi'>
                        O que nos diferencia é o comprometimento com a qualidade em cada etapa do processo. Desde a concepção do projeto até a implementação final, adotamos uma abordagem holística que incorpora design inovador, tecnologia de ponta e materiais duráveis. Nosso objetivo é criar ambientes aquáticos que não apenas atendam, mas excedam as expectativas, proporcionando aos nossos clientes um refúgio privado em seu próprio quintal.
                    </div>

                    <div className='divi'>
                        Na Pool Max, entendemos que uma piscina é mais do que apenas uma estrutura; é um investimento em qualidade de vida. Nossa equipe apaixonada de especialistas em piscinas está comprometida em tornar esse investimento valer a pena, cuidando de cada detalhe para garantir que sua experiência seja suave, agradável e memorável.
                    </div>

                    <div className='divi'>
                        Além disso, estamos comprometidos com práticas sustentáveis, buscando constantemente maneiras de minimizar nosso impacto ambiental. Acreditamos que é possível integrar o luxo com a consciência ecológica, e estamos comprometidos em liderar o caminho nessa direção.
                    </div>

                    <div className='divi'>
                        Ao escolher a Pool Max, você está escolhendo uma parceria que vai além da construção de uma piscina. Está escolhendo a garantia de qualidade, a dedicação ao cliente e a promessa de um espaço aquático que transcende as expectativas.
                        Seja bem-vindo à nossa comunidade aquática, onde a excelência encontra o lazer e os sonhos se tornam realidade. Estamos ansiosos para fazer parte da criação do seu refúgio aquático perfeito.
                    </div>
                </div>

            </div>

            <Rodape />
        </div>
    )
}