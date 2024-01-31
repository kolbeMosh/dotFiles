const getReturnRates = require('getReturnRates');
const getMean = require('../helpers/getMean');
const getMarketRates = require('./getMarketRates');
const covariance = require('../helpers/covariance');
const variance = require('../helpers/variance');

const risk = (company) => {
    returnRates = getReturnRates(company)
}