const mongoose = require("mongoose");
const Projetos = require("./model");
async function adiciona_valor(valor) {
  const garopaba = new Projetos(valor);
  await garopaba.save();
  console.log("cadastrado novo projeto");
}
async function atualiza_valor(valor) {
  await Projetos.findOneAndUpdate({ _id: valor.id }, valor);
  console.log("Projeto Atualizado");
}
async function deleta_valor(valor) {
  await Projetos.deleteOne({ _id: valor.id });
  console.log("Projeto Apagado");
}
module.exports = { adiciona_valor, atualiza_valor, deleta_valor };
