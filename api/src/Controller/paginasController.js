import { Router } from "express";
import { Buscar , Cadastrar, Login } from "../Repository/paginasRepository.js";


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



export default endpoints ;