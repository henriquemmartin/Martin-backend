const mongoose = require("mongoose");
async function main() {
  const uri =
    "mongodb://mongo:Cf6H16GGgDA-HeF-dha2AeBcEG5EdHG4@roundhouse.proxy.rlwy.net:57345";
  //"mongodb://mongo:dMZG90djHw1xnVjyEfzp@containers-us-west-119.railway.app:5736";

  await mongoose.connect(uri);
  console.log("conectado ao bando de dados Primario!");
}
module.exports = main;
//ok
