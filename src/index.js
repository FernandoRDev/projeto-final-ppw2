const express = require('express')
const app = express()
const PORT = process.env.PORT || 3001
const rotasTemporada =  require ('./api/routes/dublador')
const rotasProtagonista =  require ('./api/routes/protagonista')

app.get('/health/check', (req, res) => {
    res.json({status:'happy'})
})

app.use('/dubladores', rotasTemporada)
app.use('/protagonistas', rotasProtagonista)

app.use((err,req,res,next) => {
    if(res.statusCode == 200){
        res.statusCode = 500
        res.json({erro: err.message})
    }
    else {
        res.send()
    }
})

app.listen(PORT, () =>{
    console.log('Servidor iniciado na porta '+ PORT)
})