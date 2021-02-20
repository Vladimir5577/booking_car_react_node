const Router = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userAuthRouter = Router();

const User = require('../../Models/ClientAuth');

userAuthRouter.post('/client_register', async (req, res) => {
	// console.log(req.body);

	// Check if the user already exist in the dtatabase
	const userExist = await User.findOne({ email: req.body.email });
	if (userExist) return res.json({ message: 'User already exist' });

	// Hash password
	const salt = await bcrypt.genSalt(10);
	const hashedPassword = await bcrypt.hash(req.body.password, salt);

	// Create a new user
	const user = new User({
		name: req.body.name,
		email: req.body.email,
		password: hashedPassword
	});

	await user.save();
	res.json({ message: 'You are register successfully' });
});

// verify token 
userAuthRouter.get('/verify_token', async (req, res) => {
	const token = req.headers['x-access-token'];
	if (!token) {
		res.send({ auth: false, message: 'Prease give a token' });
	}
	const ver = jwt.verify(token, process.env.TOKEN_SECRET, (err, decode) => {
		if (err) {
			res.send({ auth: false, message: 'You failed to authenticate !' });
		} else {
			res.send({ auth: true, message: 'You are authenticated !' });
		}
	});
});

module.exports = userAuthRouter;