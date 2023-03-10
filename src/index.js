const express = require('express')
const bodyParser = require('body-parser')
const {Port} = require('./config/serverConfig')


const createServer = async () => {

    const app = express()

    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({extended:true}))

    app.listen(Port,()=>{
        console.log("listening to Port "+ Port)
    })
}

createServer()