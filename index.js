const express = require("express")
const connect = require("./config/db")
const route = require("./routes/user.routes")
const app = express()
app.use(express.json())
app.use("/user",route)
require("dotenv").config()

let port = process.env.port

app.set('view engine', 'ejs')
app.set('views',__dirname+'/view')

app.use(express.static(__dirname+"/public"))

app.listen(port,()=>{
    connect()
    console.log("Server on 8090");
})