const router = require('express').Router();

const Contact = require('../../Models/Contacts');

// get contacts
router.get('/get_contacts', async (req, res) => {
	const contacts = await Contact.find({});
	res.send(contacts);
});

// add contact
router.post('/add_contact', async (req, res) => {
	const contact = new Contact({
		key: req.body.key,
		value: req.body.value
	});

	await contact.save();
	res.json({ message: 'Contact added successfully' });
});

// delete contact
router.get('/delete/:id', async (req, res) => {
	const contact = await Contact.findById(req.params.id);
	console.log(contact);
	await contact.delete();
	res.json({ message: 'Record has been deleted successfully' });
});


module.exports = router;