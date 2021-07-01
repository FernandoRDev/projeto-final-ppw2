const mongoose = require('mongoose')
mongoose.connect("mongodb+srv://root:root@cluster0.wg5jt.mongodb.net/master?retryWrites=true&w=majority", {useFindAndModify: false, useNewUrlParser: true, useUnifiedTopology: true})

mongoose.connection.on('connected', function(){
    console.log("Mongo DB Happy :)")
})

module.exports = mongoose