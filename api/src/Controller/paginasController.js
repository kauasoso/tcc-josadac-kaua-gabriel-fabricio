import { Router } from "express";
import { Buscar , Cadastrar, CadastrarProduto, Login } from "../Repository/paginasRepository.js";


let endpoints = Router();


endpoints.get('/login', async (req,resp) => {

let r = req.body;

let resposta = await Buscar (r)

resp.send(resposta)

})




endpoints.post('/login', async (req,resp) => {

try{

    const {email , senha} = req.body;

  

    let r = await Login(email , senha);

    if (r.length === 0)
    throw new Error('Credenciais Inválidas')

    resp.send(r)
}  catch (err) {
    resp.status(404).send({
        erro : err.message
    })
}
   

})


endpoints.post('/cadastrocliente', async (req,resp) => {

try {
    



  let pessoa = req.body;


if(!pessoa.nome)
   throw new Error('Nome Obrigatório')

if (!pessoa.email)
    throw new Error ('Email Obrigatório')

if (!pessoa.senha)
   throw new Error ('Senha Obrigatória')


   let resposta = await Cadastrar(pessoa) 

  resp.status(200).send()

} catch (err) {
    resp.status(401).send({
        erro : err.message
    })
}
} );




endpoints.post ('/cadastroproduto', async (req,resp) => {
try {
    

     const produto = req.body; 
    
     if(!produto.nome)
        throw new Error ("Nome Do Produto Obrigatório !!!")

        if(!produto.categoria)
        throw new Error ("Categoria Obrigatória !!")

        if(!produto.preco)
        throw new Error ("Preço Obrigatório !!")

        if(!produto.estoque)
        throw new Error ("Coloque a Quantidade De Produtos Estocados")

        if(!produto.codigo)
        throw new Error ("Coloque o Código Do Produto")

     let resposta = await CadastrarProduto(produto);

     resp.status(200).send()

    } catch (err) {
      resp.status(400).send({
        erro: err.message
      })
    }
})




export default endpoints ;