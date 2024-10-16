import express from 'express';
 import conectDb from './db.js';
import cors from 'cors'
import artista from './models/Artista.js';

const app = express();
app.use (cors(),express.json());
 const conexao = await conectDb()

conexao.on('error', (erro) => {
    console.error('Erro ao conectar', erro)
})

conexao.once('open', ()=>{
    console.log("Conectado no MongoDB")
})

app.get("/Artistas", async(req,res)=>{
    const listaArtistas = await artista.find({});
    res.status(200).json(listaArtistas)
})

app.listen(3000, ()=>{
    console.log('Servidor rodando')
})