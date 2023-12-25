const mongoose = require("mongoose");
async function main() {
  const uri =
    "mongodb+srv://ifsulthais:qhRSIHJmqU9UrsTi@cluster0.zz8ufto.mongodb.net/martinProjetos";
  //"mongodb://mongo:dMZG90djHw1xnVjyEfzp@containers-us-west-119.railway.app:5736";

  await mongoose.connect(uri);
  console.log("conectado ao bando de dados Primario");
}
module.exports = main;
//ok
