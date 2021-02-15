const router = require('express').Router();

const Contacts = require('../../Models/Contacts');

// Get contacts
router.get('/get_contacts', async (req, res) => {
	const contacts = await Contacts.find({});
	res.send(contacts);
});

module.exports = router;