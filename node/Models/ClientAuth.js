const { Schema, model } = require('mongoose');

const schema = new Schema({
	name: {
		type: String,
		require: true
	},
	email: {
		type: String,
		require: true
	},
	password: {
		type: String,
		require: true
	},
	rentCar: {
		type: String
	}
});

/*
schema.methods.toJson = function () {
	const myData = this.toObject();
	myData.toString();
	return myData;
};
*/

module.exports = model('User', schema);