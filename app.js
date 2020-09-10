const express = require('express')
const app = express();


const vendorRoutes = require('./api/routes/vendor');

app.use('/vendor', vendorRoutes);

module.exports = app;