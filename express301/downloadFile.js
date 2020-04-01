const path = require('path');
const express = require('express');

const app = express();

// Use view engine
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// Download File
app.get('/statement', (req, res, next) => {
	res.download(path.join(__dirname, '/userStatements/BankStatement.png'), (err) => {
		if (err) {
			if (!res.headersSent) {
				res.redirect('/download/error');
			}
		}
	});
});

app.get('/', (req, res, next) => {
	res.render('index');
});

app.listen(3000, () => console.log(`Server running on port 3000`));
