var mongoose = require('mongoose');
var Schema   = mongoose.Schema;
var GameModel = require('./GameModel.js');

var PlayerSchema = new Schema({
	Name : String,
	Games : [GameModel.schema]
});

module.exports = mongoose.model('Player', PlayerSchema);