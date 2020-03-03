// NodeJS is the language
// Express is node, a node module
const express = require('express');

// an "app" is the express function (createApplication inside the express module)
// invoked and is an express application
const app = express();

// all is a method, and it takes 2 args:
// 1. route
// 2. callback to run if the route requested
app.all('*', (req, res) => {
	// Express handle the basic headers (status code, mime-type)! Awesome!
	res.send(`<h1>This is Home Page</h1>`);
	// Express handle the end! Awesome!
});

app.get('/', (req, res, next) => {
	res.json({
		name: 'Ahmed',
		address: 'Ismailia',
		age: 50
	});
});
app.listen(3000, () => {
	console.log('Server listening on port 3000');
});
