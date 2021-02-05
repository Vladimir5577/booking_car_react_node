To install project (node module after git clone) type 
	
	$ npm i

Then create .env from .env.example

	$ cp .env.example .env

================================================

Create project folder and install in the project folder: 

	$ npm init -y

	$ npm install express mongoose

	$ npm i express-fileupload

	$ npm i -D nodemon

	$ npm install cors

	$ npm install dotenv

	$ npm install bcrypt

	$ npm install jsonwebtoken

In package.json file in 'scripts' add
	
	...
	"scripts": {
		...
		"start": "node index",
  		"dev": "nodemon index"
	},
	...

Create file index.js.

To run app 

	$ npm run dev

In the browser type

	localhost:3001


===============================================================

Basic mongodb query:

	To get into database:

		$ mongo <database>

	show dbs; --- show databases 

	use myCustomers; --- createand switch to this database

	db.createCollection('customers'); --- create collection (table for mysql)

	show collections; ---  to show collections

	db.customers.insert({first_name: "Bob", last_name: "Cumer"});  --- insert record to the collection

	db.customers.find(); --- find all record from the collection

	db.customers.remove({first_name: "Mike"});  ---  to remove the record

	db.customers.remove({first_name: "Bob"}, {justOne: true});  ---  to remove only one record (limit)



