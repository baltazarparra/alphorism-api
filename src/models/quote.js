const mongoose = require('mongoose')
const { Schema } = mongoose

const quoteSchema = new Schema({
    quote: {
        type: String,
        trim: true
    },
    author: {
        type: String,
        trim: true
    }
})

const Quote = mongoose.model('Quote', quoteSchema)

module.exports = { Quote }