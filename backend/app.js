const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const adminrouter = require('')

const app = express()
app.use(express.urlencoded({extended:true}))
app.use(cors())
app.use(morgan('dev'))




module.exports = app 