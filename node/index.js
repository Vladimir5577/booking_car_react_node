const express = require('express');
const cors = require('cors');
const fileUpload = require('express-fileupload');

const mongoose = require('./db/mongoose');

const app = express();
app.use(cors());
app.use(fileUpload());
app.use(express.json());

// Routes 
const carAdminRouter = require('./routes/admin_routes/car_routes');
const adminAuthRouter = require('./routes/admin_routes/admin_auth');


app.use('/admin/car/', carAdminRouter);
app.use('/admin/auth', adminAuthRouter);

app.listen(3001, () => {
	console.log('Server up and running on the port 3001');
});