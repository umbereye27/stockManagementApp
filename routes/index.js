const express = require('express');
const allRoutes = express.Router();

const stockRoute = require('./stock.route');
allRoutes.use('/stock', stockRoute);

module.exports =allRoutes;