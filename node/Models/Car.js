const { Schema, model } = require('mongoose');

const schema = new Schema({
	image: {
		type: String,
		require: true
	},
	model: {
		type: String,
		require: true
	},
	title: {
		type: String,
		require: true
	},
	description: {
		type: String,
		require: true
	}
});

module.exports = model('Car', schema);