const router = require('express').Router();

const Car = require('../../Models/Car');

// Get cars
router.get('/get_cars', async (req, res) => {
	const cars = await Car.find({});
	res.send(cars);
});

module.exports = router;