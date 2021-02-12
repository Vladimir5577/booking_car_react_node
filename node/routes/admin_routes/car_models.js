const router = require('express').Router();

const CarModel = require('../../Models/CarModel');

router.get('/get_models', async (req, res) => {
	const models = await CarModel.find({});
	res.send(models);
});

router.post('/add_model', async (req, res) => {
	const carModel = new CarModel({
		model: req.body.model
	});

	await carModel.save();
	res.json({ message: 'Model added successfully' });
});

router.get('/delete/:id', async (req, res) => {
	const model = await CarModel.findById(req.params.id);
	await model.delete();
	res.json({ message: 'Record has been deleted successfully' });
});


module.exports = router;