const newrelic = require('newrelic');
const express = require('express');

// Router
var router = require('./routes.js');

const app = express();
module.exports.app = app;

// Serve static files
app.use(express.static(`${__dirname}/../public`));

// Logging and parsing
app.use(express.json());

// Set up our routes
app.use('/qa', router);

app.get('/', (req, res) => {
  res.send('server is running');
});

const port = 3000;

app.listen(port, () => {
  console.log(`Successfully running on port ${port}`);
});


