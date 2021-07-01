const mongoose = require('../data/index.js')

let dubladorSchema = new mongoose.Schema({
    nome: {
        type: String,
        uppercase: true,
        required: true
    },
    nascimento : Date,
    salario : Number,
    telefone : String,
    endereco: String,
    
    anime: {
        type : Object
    }

}, {timestamps : true})

let Dublador = mongoose.model('Dublador', dubladorSchema)

module.exports = Dublador