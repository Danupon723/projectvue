const knex = require('knex')
require('dotenv').config()


const conn  = knex({
    client:'mysql2',
    connection:{
        host: process.env.DB_HOST || "127.0.0.1" , 
        user:process.env.DB_USER  || "root" , 
        password : process.env.DB_PASSWORD || "" , 
        database : process.env.DB_NAME || "skills_db", 
        port : process.env.DB_PORT || 3306, 
        connectionTimeout : 1500 , 
    },
    pool:{min : 0  , max: 10 ,  acquireTimeoutMillis : 20000}
})


module.exports = conn