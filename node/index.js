const express = require('express');
const cors = require('cors');
const fileUpload = require('express-fileupload');

const mongoose = require('./db/mongoose');

const app = express();
app.use(cors());
app.use(fileUpload());

// Routes
const carAdminRouter = require('./routes/admin_routes/car_routes');


app.use('/admin/car/', carAdminRouter);

app.listen(3001, () => {
	console.log('Server up and running on the port 3001');
});