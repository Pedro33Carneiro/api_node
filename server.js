import express from 'express'
const app = express()

app.use(express.json())

const usuarios = []

//ROTAS 
app.get('/cadastro',(req,res)=>{
    res.send('DEU GRENN COM O GET')
})

app.post('/cadastro',(req,res)=>{
    console.log(req)
    res.send('DEU GREEN COM O GET')
})


//porta local do servidor
app.listen(3000,()=>{
    console.log('SERVIDOR RODANDO DA MELHOR FORMA')
})