const express = require("express")
var path = require('path');
const app = express();
const connection = require("./database/database");

//Database
connection
    .authenticate()
    .then(() => {
        console.log("Conexão feita com o banco!")
    })
    .catch((msgErro) => {
        console.log(msgErro);
    })

//View engine para html
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(express.static('public'))

//Rotas
app.get("/", (req, res) => {
    res.render("start")
});

app.get("/investimentos", (req, res) => {
    res.render("all-investiments")
});

app.get("/novo-investimento", (req, res) => {
    res.render("new-investiment")
});

app.listen(8080,() => {console.log("App rodando!")})