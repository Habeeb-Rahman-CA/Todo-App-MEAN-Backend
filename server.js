const express = require("express")
const dotenv = require("dotenv").config()
const cors = require('cors');
const connectDB = require("./config/db-connection");

const app = express()
connectDB()

const port = process.env.PORT || 5000

app.use(express.json())
app.use(cors())

app.listen(port, () =>{
    console.log(`server is running on ${port}`)
})