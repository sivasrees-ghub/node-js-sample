var express = require('express');
var app = express();
var shippingCalculator = require('./lib/calculate-shipping-demo');

shippingCalculator(app);

app.get('/v1', function(req, res) {
  res.send('Hello World');
});

module.exports = app;