const mongoose = require ('mongoose')
const Schema = mongoose.Schema

const pollSchema = new Schema({
    question: {
        type: String
    },
    options: {
        type: Array
    }
}, {timestamps: true})

const Poll = mongoose.model('Poll', pollSchema)
module.exports = Poll