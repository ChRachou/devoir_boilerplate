const mongoose = require('mongoose')
const { Schema } = mongoose;

const gameSchema = new Schema({
    user: String,
    point: Number,
    time: Date
})

const GameModel = mongoose.model('game', gameSchema);
module.exports = GameModel;