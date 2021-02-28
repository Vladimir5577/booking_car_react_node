const router = require('express').Router();

const Car = require('../../Models/Car');
const User = require('../../Models/ClientAuth');

// Get cars
router.get('/get_cars', async (req, res) => {
	const cars = await Car.find({});
	res.send(cars);
});

// booking a car
router.patch('/rent_car', async (req, res) => {
	const user = await User.findOneAndUpdate({ email: req.body.userEmail }, {
		rentCar: req.body.carId
	});

	res.json({ message: 'Car booked successfully' });
});

// get a rented car
router.get('/rented_car', async (req, res) => {
	res.send('rented car');
});

// booking a car
router.patch('/remove_rented_car', async (req, res) => {
	const user = await User.findOneAndUpdate({ email: req.body.userEmail }, {
		rentCar: ''
	});

	res.json({ message: 'Car booked successfully' });
});


module.exports = router;