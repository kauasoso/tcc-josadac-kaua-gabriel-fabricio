import Cabecalho from '../cabecalho';
import Card from '../card';
import './index.scss';
import Rodape from '../rodape';







export default function Home() {








    return (
        <div className='mae'>
            <Cabecalho />

            <div className='container'>

                <div className="marquee" >
                    <marquee behavior="" direction="" scrollamount="15"><img className='homepiscina' src="./assets/image/pisc-1.png" alt="" />
                        <img className='homepiscina' src="./assets/image/pisc-2.png" alt="" />
                        <img className='homepiscina' src="./assets/image/pisc-3.png" alt="" />
                        <img className='homepiscina' src="./assets/image/pisc-4.png" alt="" />
                        <img className='homepiscina' src="./assets/image/pisc-5.png" alt="" />
                        <img className='homepiscina' src="./assets/image/pisc-6.png" alt="" />
                    </marquee>

                </div>

                <div className='subcontainer'>

                    <div className='agrupa-titulos'>
                        <h1>PRODUTOS</h1>
                        <h3>CONHEÇA NOSSA LINHA DE PRODUTOS PARA PISCINA !!</h3>
                    </div>

                    <div className='agrupa-card-1'>

                        <div className='cardd' > <a className='ahome' href="/aquecedores">
                            <div>
                                <img className='categorias' src="./assets/image/catego-aqueci-1.png" alt="" />
                            </div>

                            <div className='line'>
                            </div>


                            <div className='enunciado'>
                                <h2>AQUECIMENTO</h2>
                            </div>

                            <div className='final-cruz'>
                                <img src="./assets/image/cruz.png" alt="" />
                            </div>

                        </a>
                        </div>
                        {/* card-1 fim */}


                        <div className='cardd'> <a className='ahome' href="/aspirador">
                            <div>
                                <img className='categorias' src="./assets/image/catego-asp.png" alt="" />
                            </div>

                            <div className='line'>
                            </div>


                            <div className='enunciado'>
                                <h2>ASPIRADORES</h2>
                            </div>

                            <div className='final-cruz'>
                                <img src="./assets/image/cruz.png" alt="" />
                            </div>
                        </a>
                        </div>
                        {/* card-2 fim */}


                        <div className='cardd'>  <a className='ahome' href="/bordas">
                            <div>
                                <img className='categorias' src="./assets/image/catego-bord.png" alt="" />
                            </div>

                            <div className='line'>
                            </div>


                            <div className='enunciado'>
                                <h2>BORDAS</h2>
                            </div>

                            <div className='final-cruz'>
                                <img src="./assets/image/cruz.png" alt="" />
                            </div></a>
                        </div>

                        {/* card-3 fim */}

                        <div className='cardd'> <a className='ahome' href="/limpeza">
                            <div>
                                <img className='categorias' src="./assets/image/catego-limp.png" alt="" />
                            </div>

                            <div className='line'>
                            </div>


                            <div className='enunciado'>
                                <h2>LIMPEZA</h2>
                            </div>

                            <div className='final-cruz'>
                                <img src="./assets/image/cruz.png" alt="" />
                            </div></a>
                        </div>

                        {/* card-4 fim */}

                    </div>




                    {/* segunda parte abaixoo dos cards de categoria */}

                    {/*cvsdsvsdv*/}



                    <div className='agrupa-card-1'>

                        <div className='cardd'><a className='ahome' href="/cascatas">
                            <div>
                                <img className='categorias' src="./assets/image/catego-casca.png" alt="" />
                            </div>

                            <div className='line'>
                            </div>


                            <div className='enunciado'>
                                <h2>CASCATAS E DUCHAS</h2>
                            </div>

                            <div className='final-cruz'>
                                <img src="./assets/image/cruz.png" alt="" />
                            </div></a>
                        </div>
                        {/* card-1 , 2fx , fim */}


                        <div className='cardd'> <a className='ahome' href="/acess">
                            <div>
                                <img className='categorias' src="./assets/image/catego-disp.png" alt="" />
                            </div>

                            <div className='line'>
                            </div>


                            <div className='enunciado'>
                                <h2>ACESSORIOS</h2>
                            </div>

                            <div className='final-cruz'>
                                <img src="./assets/image/cruz.png" alt="" />
                            </div></a>
                        </div>
                        {/* card-2 , 2fx , fim */}


                        <div className='cardd'>  <a className='ahome' href="/produto">
                            <div>
                                <img className='categorias' src="./assets/image/catego-purif.png" alt="" />
                            </div>

                            <div className='line'>
                            </div>

                            <div className='enunciado'>
                                    <h2>FILTROS</h2>
                                </div>

                    <div className='final-cruz'>
                        <img src="./assets/image/cruz.png" alt="" />
                    </div></a>
                        </div>

                        {/* card-3 , 3fx , fim */}

                        <div className='cardd'>  <a className='ahome' href="/bombas">
                            <div>
                                <img className='categorias' src="./assets/image/catego-filt.png" alt="" />
                            </div>

                            <div className='line'>
                            </div>


                            <div className='enunciado'>
                                <h2>AQUECIMENTO</h2>
                            </div>

                            <div className='final-cruz'>
                                <img src="./assets/image/cruz.png" alt="" />
                            </div></a>
                        </div>

                        {/* card-4 , 4fx , fim */}

                    </div>
                    {/* final da 2 faixa */}





                    <div className='agrupa-card-3'>




                        <div className='cardd'> <a className='ahome' href="/iluminacoes">
                            <div>
                                <img className='categorias' src="./assets/image/catego-ilumin.png" alt="" />
                            </div>

                            <div className='line'>
                            </div>


                            <div className='enunciado'>
                                <h2>ILUMINAÇÃO</h2>
                            </div>

                            <div className='final-cruz'>
                                <img src="./assets/image/cruz.png" alt="" />
                            </div></a>
                        </div>

                        {/* card-1 , 3fx , fim */}

                        <div className='cardd'>   <a className='ahome' href="/pisos">
                            <div>
                                <img className='categorias' src="./assets/image/catego-reves.png" alt="" />
                            </div>

                            <div className='line'>
                            </div>


                            <div className='enunciado'>
                                <h2>PISOS PARA PISCINA</h2>
                            </div>

                            <div className='final-cruz'>
                                <img src="./assets/image/cruz.png" alt="" />
                            </div></a>
                        </div>

                        {/* card-1 , 4fx , fim */}

                    </div>


                </div> {/* < final subcontainer */}







                <div className='subcontainer2'>

                    <h1>UM POUCO DE NOSSOS SERVIÇOS !</h1>


                    <div className='antes'>
                        <img className='servic' src="../assets/image/servic.png" alt="" />
                    </div>

                </div>




                <div className='rodape'>

                    <div className='agrupa-info'>

                        <div className="infos">


                            <div className='grupo'>
                                <h2>Institucional</h2>
                                <p>Fale conosco</p>
                                <p > <a className='branco' href="/sobrenos">Sobre nós</a></p>
                            </div>

                            <div className='line'>
                                <div>

                                </div>
                            </div>

                        </div>

                        <div className="infos">
                            <div className='grupo'>
                                <h2>Ajuda e Suporte</h2>
                                <p>Recursos</p>
                                <p>Política de Entrega</p>
                                <p>Segurança e Privacidade</p>
                            </div>
                            <div className='line'>
                                <div>

                                </div>
                            </div>
                        </div>


                        <div className="infos">
                            <div className='grupo'>
                                <h2>Atendimento</h2>
                                <p className=''> <a className='branco' href="https://www.google.com.br/maps/place/Instituto+Social+Nossa+Senhora+de+F%C3%A1tima/@-23.6803284,-46.7105058,17z/data=!3m1!4b1!4m6!3m5!1s0x94ce502d2289a843:0x14406b17b30d0174!8m2!3d-23.6803333!4d-46.7079309!16s%2Fg%2F1ptxj22k2?entry=ttu"><img src="../assets/image/local.png" alt="" /> Av. Coronel Octaviano de Freitas Costa, 463 - Socorro, São Paulo - SP, 04773-000</a> </p>
                                <p><img src="../assets/image/tell.png" alt="" /> 11 9 1234-5678</p>
                                <p><img src="https://cdn-icons-png.flaticon.com/128/747/747314.png" alt="" height={25} width={25} /> <a className='branco' href="https://mail.google.com/mail/u/3/#sent?compose=CllgCKCGldGfTnzHFSNhHwjPsLFhrzjWvRQDsPBdgznVqDvDPxNfQBTDBzfrKbjxbbMcxqgsrKL"> poolmax.2023@gmail.com</a></p>
                            </div>

                            <div className='line'>
                                <div>

                                </div>
                            </div>
                        </div>


                        <div className="infos">
                            <div className='grupo-image'>
                                <h2>Redes sociais</h2>
                                <img src="../assets/image/facebook.png" alt="" />
                                <img src="../assets/image/instagram.png" alt="" />
                                <img src="../assets/image/wpp.png" alt="" />
                                <img src="../assets/image/twt.png" alt="" />
                            </div>

                        </div>


                    </div>


                </div>

            </div>





        </div>

    );
}



