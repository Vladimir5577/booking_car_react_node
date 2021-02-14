const { Schema, model } = require('mongoose');
	
const schema = new Schema({
	key: {
		type: String,
		require: true
	},
	value: {
		type: String,
		require: true
	}
});

module.exports = model('Contact', schema);