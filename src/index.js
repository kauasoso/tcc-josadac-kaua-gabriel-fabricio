import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';



import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './home';
import Cabecalho from './cabecalho';
import Card from './card';
import Pedido from './meuspedidos';
import Cabecalho2 from './cabecalho2';
import Rodape from './rodape';
import Status from './statuspedido';
import Pagamento from './modopagamento';
import Informardados from './informardados';
import Viapaypal from './viapaypal';
import Viapix from './viapix';
import { Login } from './login';
import { Endereco } from './endereço';
import { Grafico } from './grafico';
import { Grafico2 } from './graficomensal';
import { Comentario } from './comentario';
import HomeAdm from './homeadm';
import Cadastro from './cadastroCliente';
import CadastroProduto from './ABC---PAGES---ADM/cadastro-produto';
import CabecalhoInicial from './cabecalho.inicial';
import ConsultaProduto from './ABC---PAGES---ADM/consultar-produto';
import Realizados from './PedidosRealizados';
import LoginAdmin from './ABC---PAGES---ADM/loginAdm/loginAdm';
import  MinhaConta  from './MinhaContaCliente';
import CabecalhoSemapi from './cabecalho-antes.Login';
import HomeLogin from './home-login-cadastro';

import Produto from './produtos'
import Filtro1 from './detalhe-produto-filtro/filtro-1'
import Filtro2 from './detalhe-produto-filtro/filtro-2'
import Filtro3 from './detalhe-produto-filtro/filtro-3'
import Filtro4 from './detalhe-produto-filtro/filtro-4'
import Filtro5 from './detalhe-produto-filtro/filtro-5'
import Filtro6 from './detalhe-produto-filtro/filtro-6'
import Bomba1 from './detalhe-produto-bomba/bomba1';
import Bomba2 from './detalhe-produto-bomba/bomba2';
import Bomba3 from './detalhe-produto-bomba/bomba3';
import Bombas from './bombas';
import Ace1 from './detalhe-produto-acessorio/ace1';
import Ace2 from './detalhe-produto-acessorio/ace2';
import Ace3 from './detalhe-produto-acessorio/ace3';
import Ace4 from './detalhe-produto-acessorio/ace4';
import Ace5 from './detalhe-produto-acessorio/ace5';
import Ace6 from './detalhe-produto-acessorio/ace6';
import Acessorios from './acessorios';
import Aspiradores from './aspiradores';
import Aspi1 from './detalhe-produto-aspirador/aspi1';
import Aspi2 from './detalhe-produto-aspirador/aspi2';
import Aspi3 from './detalhe-produto-aspirador/aspi3';
import Bor1 from './detalhe-produto-borda/bor1';
import Bor2 from './detalhe-produto-borda/bor2';
import Bor3 from './detalhe-produto-borda/bor3';
import Bor4 from './detalhe-produto-borda/bor4';
import Bor5 from './detalhe-produto-borda/bor5';
import Bor6 from './detalhe-produto-borda/bor6';
import Cascatas from './cascatas';
import Cas1 from './detalhe-produto-cascata/cas1';
import Cas2 from './detalhe-produto-cascata/cas2';
import Cas3 from './detalhe-produto-cascata/cas3';
import Cas4 from './detalhe-produto-cascata/cas4';
import Cas5 from './detalhe-produto-cascata/cas5';
import Cas6 from './detalhe-produto-cascata/cas6';
import Iluminacao from './iluminacao';
import Ilu1 from './detalhe-produto-iluminacao/ilu1';
import Ilu2 from './detalhe-produto-iluminacao/ilu2';
import Ilu3 from './detalhe-produto-iluminacao/ilu3';
import Ilu4 from './detalhe-produto-iluminacao/ilu4';
import ILu5 from './detalhe-produto-iluminacao/ilu5';
import Ilu6 from './detalhe-produto-iluminacao/ilu6';
import Limpeza from './limpeza';
import Limp1 from './detalhe-produto-limpeza/limp1';
import Limp2 from './detalhe-produto-limpeza/limp2';
import Limp3 from './detalhe-produto-limpeza/limp3';
import Limp4 from './detalhe-produto-limpeza/limp4';
import Limp5 from './detalhe-produto-limpeza/limp5';
import Limp6 from './detalhe-produto-limpeza/limp6';
import Pisos from './pisos';
import Pis1 from './detalhe-produto-piso/piso1';
import Pis2 from './detalhe-produto-piso/piso2';
import Pis3 from './detalhe-produto-piso/piso3';
import Pis4 from './detalhe-produto-piso/piso4';
import Pis5 from './detalhe-produto-piso/piso5';
import Pis6 from './detalhe-produto-piso/piso6';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
       <Route path='/' element={<HomeLogin/>}/>
      <Route path='/realizados' element={<Realizados/>} />
      <Route path='/home' element={<Home/>}/>
      <Route path='/cabecalho' element={<Cabecalho/>}/>
      <Route path='/card' element={<Card/>}/>
      <Route path='/pedido' element={<Pedido/>}/>
      <Route path='/cabecalho2' element={<Cabecalho2/>}/>
      <Route path='/rodape' element={<Rodape/>}/>
      <Route path='/statuspedido' element={<Status/>}/>
      <Route path='/pagamento' element={<Pagamento/>}/>
      <Route path='/informardados' element={<Informardados/>}/>
      <Route path='/paypal' element={<Viapaypal/>}/>
      <Route path='/pix' element={<Viapix/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/endereco' element={<Endereco/>}/>
      <Route path='/grafico' element={<Grafico/>}/>
      <Route path='/graficomensal' element={<Grafico2/>}/>
      <Route path='/comentario' element={<Comentario/>}/>
      <Route path='/homeadm' element={<HomeAdm/>}/>
      <Route path='/cadastro' element={<Cadastro/>}/>
      <Route path='/cadastroproduto' element={<CadastroProduto/>}/>
      <Route path='/cabecalhoinicial' element={<CabecalhoInicial/>}/>
      <Route path='/consultaproduto' element={<ConsultaProduto/>}/>
      <Route path='/loginadm' element={<LoginAdmin/>}/>
      <Route path='/minhaconta' element={<MinhaConta/>}/>
      <Route path='/cabecalhosemapi' element={<CabecalhoSemapi/>}/>
      

      <Route path='/produto' element={<Produto/>}/>
      <Route path='/filtro1' element={<Filtro1/>}/>
      <Route path='/filtro2' element={<Filtro2/>}/>
      <Route path='/filtro3' element={<Filtro3/>}/>
      <Route path='/filtro4' element={<Filtro4/>}/>
      <Route path='/filtro5' element={<Filtro5/>}/>
      <Route path='/filtro6' element={<Filtro6/>}/>



      <Route path='/bombas' element={<Bombas/>}/>
      <Route path='/bomba1' element={<Bomba1/>}/>
      <Route path='/bomba2' element={<Bomba2/>}/>
      <Route path='/bomba3' element={<Bomba3/>}/>



      <Route path='/acessorios' element={<Acessorios/>}/>
      <Route path='/ac1' element={<Ace1/>}/>
      <Route path='/ac2' element={<Ace2/>}/>
      <Route path='/ac3' element={<Ace3/>}/>
      <Route path='/ac4' element={<Ace4/>}/>
      <Route path='/ac5' element={<Ace5/>}/>
      <Route path='/ac6' element={<Ace6/>}/>






      <Route path='/aspiradores' element={<Aspiradores/>}/>
      <Route path='/aspirador1' element={<Aspi1/>}/>
      <Route path='/aspirador2' element={<Aspi2/>}/>
      <Route path='/aspirador3' element={<Aspi3/>}/>




  
      <Route path='/borda1' element={<Bor1/>}/>
      <Route path='/borda2' element={<Bor2/>}/>
      <Route path='/borda3' element={<Bor3/>}/>
      <Route path='/borda4' element={<Bor4/>}/>
      <Route path='/borda5' element={<Bor5/>}/>
      <Route path='/borda6' element={<Bor6/>}/>





      <Route path='/acessorios' element={<Acessorios/>}/>
      <Route path='/ac1' element={<Ace1/>}/>
      <Route path='/ac2' element={<Ace2/>}/>
      <Route path='/ac3' element={<Ace3/>}/>
      <Route path='/ac4' element={<Ace4/>}/>
      <Route path='/ac5' element={<Ace5/>}/>
      <Route path='/ac6' element={<Ace6/>}/>





      <Route path='/cascatas' element={<Cascatas/>}/>
      <Route path='/cascata1' element={<Cas1/>}/>
      <Route path='/cascata2' element={<Cas2/>}/>
      <Route path='/cascata3' element={<Cas3/>}/>
      <Route path='/cascata4' element={<Cas4/>}/>
      <Route path='/cascata5' element={<Cas5/>}/>
      <Route path='/cascata6' element={<Cas6/>}/>







      <Route path='/iluminacoes' element={<Iluminacao/>}/>
      <Route path='/iluminacao1' element={<Ilu1/>}/>
      <Route path='/iluminacao2' element={<Ilu2/>}/>
      <Route path='/iluminacao3' element={<Ilu3/>}/>
      <Route path='/iluminacao4' element={<Ilu4/>}/>
      <Route path='/iluminacao5' element={<ILu5/>}/>
      <Route path='/iluminacao6' element={<Ilu6/>}/>





      <Route path='/limpezas' element={<Limpeza/>}/>
      <Route path='/limpeza1' element={<Limp1/>}/>
      <Route path='/limpeza2' element={<Limp2/>}/>
      <Route path='/limpeza3' element={<Limp3/>}/>
      <Route path='/limpeza4' element={<Limp4/>}/>
      <Route path='/limpeza5' element={<Limp5/>}/>
      <Route path='/limpeza6' element={<Limp6/>}/>






      <Route path='/pisos' element={<Pisos/>}/>
      <Route path='/piso1' element={<Pis1/>}/>
      <Route path='/piso2' element={<Pis2/>}/>
      <Route path='/piso3' element={<Pis3/>}/>
      <Route path='/piso4' element={<Pis4/>}/>
      <Route path='/piso5' element={<Pis5/>}/>
      <Route path='/piso6' element={<Pis6/>}/>


    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


