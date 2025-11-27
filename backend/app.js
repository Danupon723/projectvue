const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const adminrouter = require('./router/auth')

const app = express()
app.use(express.urlencoded({extended:true}))
app.use(cors())
app.use(morgan('dev'))


app.use('/api/auth' , adminrouter)

module.exports = app 