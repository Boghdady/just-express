const express = require('express');
const helmet = require('helmet');

const app = express();

// helmet can help you to protect your app from well-known web vulnerabilities by setting HTTP headers
app.use(helmet());
// 1. Serve static files
app.use(express.static('public'));
// 2. Parses requests where the Content-Type header matches the type (json) and add the coming json to req.body
app.use(express.json());
// 3. Parses requests where the Content-Type header matches the type (urlencoded) and add the coming json to req.body
app.use(express.urlencoded({ extended: false }));

app.get('/ajax', (req, res) => {
	console.log(req);
	res.send('Test');
});

app.listen(3000);
