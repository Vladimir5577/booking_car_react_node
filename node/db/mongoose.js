const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

// Connect to DB
mongoose.connect(
	process.env.DB_CONNECT, 
	{
		useNewUrlParser: true,
		useFindAndModify: false,
		useUnifiedTopology: true
	},
	() => console.log('Connected to DB')
);
