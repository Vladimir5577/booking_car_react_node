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