const mongoose = require("mongoose");
async function main() {
  const uri =
    "mongodb+srv://henriquemmartin:Qwerrewq2@cluster0.3jhsdj3.mongodb.net/?retryWrites=true&w=majority";
  await mongoose.connect(uri);
  console.log("conectado ao bando de dados Primario");
}
module.exports = main;
