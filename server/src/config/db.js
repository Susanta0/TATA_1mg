const mongoose = require('mongoose')

const dotenv= require("dotenv").config()

const url= process.env.MONGO_URL

const connected= mongoose.connect(url)

module.exports=connected