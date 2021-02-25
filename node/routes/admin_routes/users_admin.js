const Router = require('express');

const userAdminRouter = Router();

const User = require('../../Models/ClientAuth');

userAdminRouter.get('/get_users', async (req, res) => {
	const users = await User.find({});
	res.send(users);
});

module.exports = userAdminRouter;