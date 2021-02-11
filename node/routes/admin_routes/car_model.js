const Router require('express');

const CarModel require('../../Models/CarModel');
const carModelRouter = Router();

carModelRoute.get('/get_models', async (req, res) => {
	const carModels = await CarModel.find({});
	res.send(carModels);
});

// carModelRouter.post('/add_model' async (req, res) => {
// 	const carModel = new CarModel({
// 		model: req.body.model
// 	});

// 	await carModel.save();
// 	res.json({ message: 'Model added successfully' });
// });

carModelRouter.get('/add_model' async (req, res) => {
	res.send('Hello');
});

module.exports = carModelRouter;