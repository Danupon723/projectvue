const app = require('./app')
require('dotenv').config()
port = process.env.PORT || 7000
app.listen(port , ()=>{console.log('Server start on ')})