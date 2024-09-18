import cors from 'cors';0
import express from 'express'
import conectDb from './db.js';

const app = express();
app.use(cors());
const conexao = await conectDb()

conexao.on('error',(erro)=>{
    console.error('Erro ao conectar', erro)
})

conexao.once('open',()=>{
    console.error('Conectando ao MongoDB')
})

app.listen(3000,()=>{
    console.log('Servidor rodando')
})