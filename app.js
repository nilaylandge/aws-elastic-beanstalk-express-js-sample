const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hi there! This is a sample app to be deployed on Elastic Beanstalk!'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
