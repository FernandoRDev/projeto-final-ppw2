const { Router } = require('express')
const express = require('express')
const route = express.Router()
const Protagonista = require('../models/Protagonista')

route.use(express.json())

route.get('/', async function(req, res, next){
    try {
        let filter = {}
        if(req.query.nome) filter.nome = req.query.nome
        
        const limit = Math.min(parseInt(req.query.limit), 100) || 100
        const skip = parseInt(req.query.skip) || 0
        
        let protagonistas = []

        protagonistas = await Protagonista.find(filter).limit(limit).skip(skip).populate('dublador')
        if(!protagonistas.length){
            res.statusCode = 204
            throw new Error()
        }
        res.json(protagonistas) 
    } catch (error) {
        next(error)
    }
})

route.get('/:id', async(req,res,next) => {
    try {
        const id = req.params.id
        let protagonista = await Protagonista.findById(id).populate('dublador')
        if(!protagonista){
            res.statusCode = 404
            throw new Error ("Nenhum protagonista com este id encontrado")
        }
        res.json(protagonista)
    } catch (error) {
        next(error)
    }
})

route.post('/', async(req,res,next) => {
    try {
        const protagonista =  new Protagonista(req.body)
        const resultado = await protagonista.save()
        res.json(resultado)
    } catch (error) {
        next(error)
    }
})

route.put('/:id', async(req,res,next) => {
    try {
        const id = req.params.id
        const protagonista = req.body
        const resultado = await Protagonista.findByIdAndUpdate(id,protagonista)
        res.json(resultado)
    } catch (error) {
        next(error)
    }
})

route.delete('/:id', async (req,res,next) =>{
    try{
        const id = req.params.id
        const resultado = await Protagonista.findByIdAndDelete(id)
        res.json(resultado)
    } catch (error) {
        next(error)
    }
})

module.exports = route