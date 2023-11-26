const mongoose = require("mongoose");
const projetosSchema = new mongoose.Schema(
  {
    nome: { type: String, required: true },
    largura: { type: Number, required: true },
    comprimento: { type: Number, required: true },
    andares: { type: Number },
    quartos: { type: Number },
    terreo: { type: Number, required: true },
    superior: { type: Number },
    garagem: { type: Number },
    gourmet: { type: Number },
    descricao: { type: String },
    vendas: { type: Number },
    linkv: { type: String },
    drive: { type: String },
  },
  { timestamps: true }
);
const Projetos = mongoose.model("Projetos", projetosSchema);
module.exports = Projetos;
