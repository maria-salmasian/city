const express = require('express');
const asyncHandler = require('express-async-handler');
const service = require('./cities.service');

const route = express.Router();

route.get('/:zipCode/', asyncHandler(async (req, res, next) => {
    const zipCode = req.params['zipCode'];
    const response = await service.getCityByZipCode(zipCode);
    res.send(response);
}))

module.exports = route;
