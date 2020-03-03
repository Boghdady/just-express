const path = require('path');
const express = require('express');
const app = express();
const helmet = require('helmet');

app.use(helmet());
// Serve static files
app.use(express.static('public'));
// Parse json and urlencoded data into req.body
app.use(express.json());
app.use(express.urlencoded());

// Use view engine
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

const validateUser = (req, res, next) => {
	res.locals.validated = false;
	next();
};

app.use(validateUser);

app.get('/', (req, res, next) => {
	res.render('index', {
		msg1: 'Ahmed Boghdady',
		msg2: 'Ahmed ibrahim',
		// Html came from DB and we want to drop it in the template
		html: `<h1>Hello All People</h1>`,
		countries: [ { name: 'Egypt', capital: 'Cairo' }, { name: 'KSA', capital: 'Ryad' } ]
	});
});

app.listen(3000, (err) => {
	console.log('Server listening on port 3000');
});
