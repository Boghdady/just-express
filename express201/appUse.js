const express = require('express');

const app = express();

// express is 2 things
// 1- Router
// 2- Middleware

// Req --------Middleware---------- Res
// Middleware function is Any function has access to req, res and next objects

app.get('/', (req, res, next) => {
	res.send('<h1>Main Page</h1>');
});

app.listen(3000);
