const { Schema, model } = require('mongoose');

const schema = new Schema({
	model: {
		type: String,
		require: true
	}
});

module.exports = model('CarModel', schema);