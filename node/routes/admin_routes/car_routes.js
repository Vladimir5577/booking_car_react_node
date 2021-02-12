const Router = require('express');

const Car = require('../../Models/Car');
const carAdminRouter = Router();

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


// Get cars
carAdminRouter.get('/get_cars',  async (req, res) => {
	const cars = await Car.find({});
	res.send(cars);
});

// add a car
carAdminRouter.post('/add_car', async (req, res) => {
	// console.log(req.body);
	const file = req.files.file;
	file.mv(`${__dirname}/../../uploads/${file.name}`, err => {
		if (err) {
			console.log(err);
			return res.status(500).send(err);
		}
	});

	const car = new Car({
		image: req.files.file.name,
		model: req.body.model,
		title: req.body.title,
		description: req.body.description
	});

	await car.save();
	res.json({ message: 'Car added successfully' });
});

// Edit car
carAdminRouter.patch('/update_car/:id', async (req, res) => {

	if (req.files !== null) {
		const file = req.files.file;
			file.mv(`${__dirname}/../../uploads/${file.name}`, err => {
			if (err) {
				console.log(err);
				return res.status(500).send(err);
			}
		});

		const car = await Car.findByIdAndUpdate({ _id: req.params.id }, {
			image: req.files.file.name,
			model: req.body.model,
			title: req.body.title,
			description: req.body.description
		});

		res.json({ message: 'Post updated successfully' });
	} else {
		const car = await Car.findByIdAndUpdate({ _id: req.params.id }, {
			model: req.body.model,
			title: req.body.title,
			description: req.body.description
		});

		res.json({ message: 'Post updated successfully' });
	}

});
 
// Delete car
carAdminRouter.get('/delete/:id', async (req, res) => {
	console.log(req.params.id);
	const car = await Car.findById(req.params.id);
	await car.delete();
	res.json({ message: 'Record has been deleted successfully' });
});




module.exports = carAdminRouter;