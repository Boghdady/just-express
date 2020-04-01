const express = require('express');
const app = express();
const helmet = require('helmet');
app.use(helmet());
app.use(express.urlencoded());
app.use(express.json());
app.use(express.static('public'));
const userRouter = require('./userRouter');
const adminRouter = require('./adminRouter');

app.use('/user', userRouter);
app.use('/admin', adminRouter);

app.listen(3000, () => console.log('Server listening on port 3000'));
