const { Router } = require('express')
const express = require('express')
const route = express.Router()
const Dublador = require('../models/Dublador')
const axios = require('axios')

route.use(express.json())

route.get('/', async function(req, res, next){
    try {
        let filter = {}
        if(req.query.nome) filter.nome = req.query.nome
        
        const limit = Math.min(parseInt(req.query.limit), 10) || 10
        const skip = parseInt(req.query.skip) || 0
        
        let dubladores = []

        dubladores = await Dublador.find(filter).limit(limit).skip(skip)
        if(!dubladores.length){
            res.statusCode = 204
            throw new Error()
        }
        res.json(dubladores) 
    } catch (error) {
        next(error)
    }
})

route.get('/:id', async(req,res,next) => {
    try {
        const id = req.params.id
        let dublador = await Dublador.findById(id)
        if(!dublador){
            res.statusCode = 404
            throw new Error ("Nenhum dublador com este id encontrado")
        }
        
        if(dublador.anime) {            
            try {
                var anime = await axios.get('http://localhost:3000/animes/'+dublador.anime)
                if(anime.status === 200) {
                    dublador.anime = anime.data  
                }    
            } catch (error) {
                console.log(error)   
            }
        }

        res.json(dublador)
    } catch (error) {
        next(error)
    }
})

route.post('/', async(req,res,next) => {
    try {
        const dublador =  new Dublador(req.body)
        const resultado = await dublador.save()
        res.json(resultado)
    } catch (error) {
        next(error)
    }
})

route.put('/:id', async(req,res,next) => {
    try {
        const id = req.params.id
        const dublador = req.body
        const resultado = await Dublador.findByIdAndUpdate(id,dublador)
        res.json(resultado)
    } catch (error) {
        next(error)
    }
})

route.delete('/:id', async (req,res,next) =>{
    try{
        const id = req.params.id
        const resultado = await Dublador.findByIdAndDelete(id)
        res.json(resultado)
    } catch (error) {
        next(error)
    }
})

module.exports = route