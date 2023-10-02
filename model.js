const mongoose = require("mongoose");
const projetosSchema = new mongoose.Schema(
  {
    nome: { type: String, required: true },
    largura: { type: Number, required: true },
    comprimento: { type: Number, required: true },
    andares: { type: Number, required: true },
    quartos: { type: Number, required: true },
    terreo: { type: Number, required: true },
    superior: { type: Number, required: true },
    garagem: { type: Number, required: true },
    gourmet: { type: Number, required: true },
    descricao: { type: String, required: true },
    vendas: { type: Number, required: true },
  },
  { timestamps: true }
);
const Projetos = mongoose.model("Projetos", projetosSchema);
module.exports = Projetos;
