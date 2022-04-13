const express = require("express")
const app = express()
const bodyParser = require("body-parser")

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.get("/", function(req, res){
    res.render("index")
})

app.get("/perguntar", (req, res) => {
    res.render("perguntar")
})

app.post("/salvarpergunta", (req, res) => {
    var titulo = req.body.titulo
    var perg = req.body.pergunta
    res.send("Formulário Recebido! " + titulo + " " + perg)
})

app.listen(8080, function(erro){
    if(erro)
        console.log("Erro ao inicializar o servidor")

    else
        console.log("Servidor inicializado com sucesso")
})