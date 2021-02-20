const router = require('express').Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

const AdminAuth = require('../../Models/AdminAuth');

/*
const verifyJWT = (req, res, next) => {
	const token = req.headers['x-access-token'];
	if (!token) {
		res.send('Hey we need a token, please give it to us next time!');
	} else {
		jwt.verify(token, process.env.TOKEN_SECRET, (err, decoded) => {
			if (err) {
				res.json({ auth: false, message: 'You failed to authenticate !' });
			} else { 
				req.userId = decoded.id;
				next();
			}
		});
	}
};
*/

// Register admin
router.post('/admin_register', async (req, res) => {
	// Checking if the admin name already exist in the database
	const adminExist = await AdminAuth.findOne({ adminName: req.body.adminNameRegister });
	if (adminExist) return res.status(400).send('Admin already exist');

	// Hash password
	const salt = await bcrypt.genSalt(10);
	const hashedPassword = await bcrypt.hash(req.body.adminPasswordRegister, salt);

	// Create a new admin
	const admin = new AdminAuth({
		adminName: req.body.adminNameRegister,
		adminPassword: hashedPassword
	});

	try {
		const saveAdmin = await admin.save();
		res.send({ admin: admin._id });
	} catch (err) {
		res.status(400).send(err);
	}
});

// Login Admin
router.post('/admin_login', async (req, res) => {
	// Check if admin exist 
	const admin = await AdminAuth.findOne({ adminName: req.body.adminNameLogin });
	if (!admin) return res.send({ message: 'Admin user not found' });

	// Verify password
	const validPassword = await bcrypt.compare(req.body.adminPasswordLogin, admin.adminPassword);
	if (!validPassword) return res.send({ message: 'Wrong password' });

	// Create and assign token
	const token = jwt.sign({ _id: admin._id }, process.env.TOKEN_SECRET);
	res.send({ auth: true, token: token, message: 'You are logged in !' });
});

// verify token 
router.get('/verify_token', async (req, res) => {
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

module.exports = router;
