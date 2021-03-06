const express = require('express');
const cors = require('cors');
const fileUpload = require('express-fileupload');

const mongoose = require('./db/mongoose');

const app = express();
app.use(cors());
app.use(fileUpload());
app.use(express.json());

app.use('/uploads', express.static('uploads'));

// Admin Routes
const carAdminRouter = require('./routes/admin_routes/car_routes');
const adminAuthRouter = require('./routes/admin_routes/admin_auth');
const modelAdminRouter = require('./routes/admin_routes/car_models');
const contactsAdminRouter = require('./routes/admin_routes/contacts_admin');
const usersAdminRouter = require('./routes/admin_routes/users_admin');

// Client Routes
const carClientRouter = require('./routes/client_routes/cars_clients');
const contactsClientRouter = require('./routes/client_routes/contacts_client');
const authClientRouter = require('./routes/client_routes/auth_client');

// admin
app.use('/admin/car/', carAdminRouter);
app.use('/admin/auth', adminAuthRouter);
app.use('/admin/car_models/', modelAdminRouter);
app.use('/admin/contacts/', contactsAdminRouter);
app.use('/admin/users/', usersAdminRouter);

// client
app.use('/client/car/', carClientRouter);
app.use('/client/contacts/', contactsClientRouter);
app.use('/client/auth/', authClientRouter);


app.listen(3001, () => {
	console.log('Server up and running on the port 3001');
});