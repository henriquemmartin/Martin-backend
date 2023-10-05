console.log("cheguei aquigi");
const express = require("express");
const main = require("./conn");
const Projetos = require("./model");
const { adiciona_valor, atualiza_valor, deleta_valor } = require("./adiciona");
main();
console.log("SAIU DE MAIN");
const app = express();
var cors = require("cors");
app.use(express.json({ extended: true }));
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  app.use(cors());
  console.log("middware ativado");
  next();
});

app.listen(PORT, () => {
  console.log("conectado a porta " + PORT);
  app.get("/arquivo", (req, res) => {
    res.send(dadosLidos);
  });
});
var dadosLidos = [];
async function ler() {
  dadosLidos = await Projetos.find();
}

app.post("/message", (req, res) => {
  const texto = req.body;
  adiciona_valor(texto);
  res.send("cadastrado com sucesso");
});
app.put("/message", (req, res) => {
  const texto = req.body;
  atualiza_valor(texto);
  res.send("cadastrado com sucesso");
});
app.delete("/message", (req, res) => {
  const texto = req.body;
  deleta_valor(texto);
  res.send("Deletado com Sucesso");
});

ler();
module.exports = { dadosLidos };
//MartinQwer2
