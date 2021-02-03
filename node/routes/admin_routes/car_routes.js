const Router = require('express');

const Car = require('../../Models/Car');
const carAdminRouter = Router();

// Get cars
carAdminRouter.get('/get_cars', async (req, res) => {
	const cars = await Car.find({});
	res.send(cars);
});

// add a car
carAdminRouter.post('/add_car', async (req, res) => {
	const file = req.files.file;
	file.mv(`${__dirname}/../../../react_app/public/uploads/${file.name}`, err => {
		if (err) {
			console.log(err);
			return res.status(500).send(err);
		}
	});

	const car = new Car({
		image: req.files.file.name,
		title: req.body.title,
		description: req.body.description
	});

	await car.save();
	res.json({ message: 'Car added successfully' });
});

// Delete car
carAdminRouter.get('/delete/:id', async (req, res) => {
	console.log(req.params.id);
	const car = await Car.findById(req.params.id);
	await car.delete();
	res.json({ message: 'Record has been deleted successfully' });
});

module.exports = carAdminRouter;