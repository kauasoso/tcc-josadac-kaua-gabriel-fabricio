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
import Produto from './produtos';

import Ace1 from './detalhe-produto-acessorio/ace1';
import Ace2 from './detalhe-produto-acessorio/ace2';
import Ace3 from './detalhe-produto-acessorio/ace3';
import Ace4 from './detalhe-produto-acessorio/ace4';
import Ace5 from './detalhe-produto-acessorio/ace5';
import Ace6 from './detalhe-produto-acessorio/ace6';

import Bomba1 from './detalhe-produto-bomba/bomba1';
import Bomba2 from './detalhe-produto-bomba/bomba2';
import Bomba3 from './detalhe-produto-bomba/bomba3';

import Cas1 from './detalhe-produto-cascata/cas1';
import Cas2 from './detalhe-produto-cascata/cas2';
import Cas3 from './detalhe-produto-cascata/cas3';
import Cas4 from './detalhe-produto-cascata/cas4';
import Cas5 from './detalhe-produto-cascata/cas5';
import Cas6 from './detalhe-produto-cascata/cas6';

import Filtro1 from './detalhe-produto-filtro/filtro-1';
import Filtro2 from './detalhe-produto-filtro/filtro-2';
import Filtro3 from './detalhe-produto-filtro/filtro-3';
import Filtro4 from './detalhe-produto-filtro/filtro-4';
import Filtro5 from './detalhe-produto-filtro/filtro-5';
import Filtro6 from './detalhe-produto-filtro/filtro-6';

import Ilu1 from './detalhe-produto-iluminacao/ilu1';
import Ilu2 from './detalhe-produto-iluminacao/ilu2';
import Ilu3 from './detalhe-produto-iluminacao/ilu3';
import Ilu4 from './detalhe-produto-iluminacao/ilu4';
import Ilu5 from './detalhe-produto-iluminacao/ilu5';
import Ilu6 from './detalhe-produto-iluminacao/ilu6';
import Iluminacao from './iluminacao';

import Aque1 from './detalhe-produto-aquecedor/aque1';
import Aque2 from './detalhe-produto-aquecedor/aque1';
import Aque3 from './detalhe-produto-aquecedor/aque1';
import Aque4 from './detalhe-produto-aquecedor/aque1';
import Aque5 from './detalhe-produto-aquecedor/aque1';
import Aque6 from './detalhe-produto-aquecedor/aque1';

import Aspi1 from './detalhe-produto-aspirador/aspi1';
import Aspi2 from './detalhe-produto-aspirador/aspi2';
import Aspi3 from './detalhe-produto-aspirador/aspi3';

import Bor1 from './detalhe-produto-borda/bor1';
import Bor2 from './detalhe-produto-borda/bor2';
import Bor3 from './detalhe-produto-borda/bor3';
import Bor4 from './detalhe-produto-borda/bor4';
import Bor5 from './detalhe-produto-borda/bor5';
import Bor6 from './detalhe-produto-borda/bor6';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/iluminacao' element={<Iluminacao/>}/>
      <Route path='/ace1' element={<Ace1/>}/>
      <Route path='/ace2' element={<Ace2/>}/>
      <Route path='/ace3' element={<Ace3/>}/>
      <Route path='/ace4' element={<Ace4/>}/>
      <Route path='/ace5' element={<Ace5/>}/>
      <Route path='/ace6' element={<Ace6/>}/>

      <Route path='/asp1' element={<Aspi1/>}/>
      <Route path='/asp2' element={<Aspi2/>}/>
      <Route path='/asp3' element={<Aspi3/>}/>

      <Route path='/aq1' element={<Aque1/>}/>
      <Route path='/aq2' element={<Aque2/>}/>
      <Route path='/aq3' element={<Aque3/>}/>
      <Route path='/aq4' element={<Aque4/>}/>
      <Route path='/aq5' element={<Aque5/>}/>
      <Route path='/aq6' element={<Aque6/>}/>

      <Route path='/bomb1' element={<Bomba1/>}/>
      <Route path='/bomb2' element={<Bomba2/>}/>
      <Route path='/bomb3' element={<Bomba3/>}/>

      <Route path='/borda1' element={<Bor1/>}/>
      <Route path='/borda2' element={<Bor2/>}/>
      <Route path='/borda3' element={<Bor3/>}/>
      <Route path='/borda4' element={<Bor4/>}/>
      <Route path='/borda5' element={<Bor5/>}/>
      <Route path='/borda6' element={<Bor6/>}/>


      <Route path='/cas1' element={<Cas1/>}/>
      <Route path='/cas2' element={<Cas2/>}/>
      <Route path='/cas3' element={<Cas3/>}/>
      <Route path='/cas4' element={<Cas4/>}/>
      <Route path='/cas5' element={<Cas5/>}/>
      <Route path='/cas6' element={<Cas6/>}/>

      <Route path='/filtro1' element={<Filtro1/>}/>
      <Route path='/filtro2' element={<Filtro2/>}/>
      <Route path='/filtro3' element={<Filtro3/>}/>
      <Route path='/filtro4' element={<Filtro4/>}/>
      <Route path='/filtro5' element={<Filtro5/>}/>
      <Route path='/filtro6' element={<Filtro6/>}/>

      <Route path='/ilu1' element={<Ilu1/>}/>
      <Route path='/ilu2' element={<Ilu2/>}/>
      <Route path='/ilu3' element={<Ilu3/>}/>
      <Route path='/ilu4' element={<Ilu4/>}/>
      <Route path='/ilu5' element={<Ilu5/>}/>
      <Route path='/ilu6' element={<Ilu6/>}/>


      <Route path='/produto' element={<Produto/>}/>
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

    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

