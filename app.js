const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('This is a CI/CD Pipeline with Manual Approval Review Stage.'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
