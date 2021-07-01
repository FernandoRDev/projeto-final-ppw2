const mongoose = require('../data/index.js')

let protagonistaSchema = new mongoose.Schema({
    nome: {
        type: String,
        uppercase: true,
        required: true
    },
    genero: String,
    vivo: Boolean,
    classe: String,
    rate: Number,

    dublador: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Dublador',
        required: true
    }
}, {timestamps : true})

let Protagonista = mongoose.model('Protagonista', protagonistaSchema)

module.exports = Protagonista
