var mongoose = require('mongoose');
var Schema   = mongoose.Schema;
var PlayerModel = require('./PlayerModel.js');

var GameSchema = new Schema({
	Date : Date,
    PlayerOne : PlayerModel,
    PlayerTwo : PlayerModel,
    PlayerOneScore: Number,
    PlayerTwoScore: Number
});

module.exports = mongoose.model('Game', GameSchema);