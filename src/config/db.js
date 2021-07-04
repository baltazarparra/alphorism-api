require('dotenv').config()
const mongoose = require('mongoose')

const DATABASE_URL = process.env.DATABASE_URL

const connectDb = () => {
    return mongoose.connect(DATABASE_URL, { useUnifiedTopology: true, useNewUrlParser: true }, err => {
        if (err) console.error('Connection failed', err)
        else console.log('Conection ok')
    })
}

const db = mongoose.connection

db.on('error', console.error.bind(console, 'Mongo Failed'))

module.exports = connectDb