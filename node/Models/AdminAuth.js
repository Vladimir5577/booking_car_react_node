const { Schema, model } = require('mongoose');

const adminSchema = new Schema({
	adminName: {
		type: String,
		require: true,
		min: 2,
		max: 255
	},
	adminPassword: {
		type: String,
		require: true,
		min: 2,
		max: 255
	},
	date: {
		type: Date,
		default: Date.now
	}
});

module.exports = model('Admin', adminSchema);