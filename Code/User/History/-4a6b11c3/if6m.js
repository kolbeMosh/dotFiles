const stats = require('../helpers/stats');
const getReturnRates = require('getReturnRates');
const getMarketRates = require('./getMarketRates');

const risk = (company) => {
    returnRates = getReturnRates(company);
    returnRatesMean = stats.mean(returnRates);

    marketRates = getMarketRates();
    marketRatesMean = stats.mean(marketRates);

    topCov = stats.covariance(returnRates, returnRatesMean, marketRates, marketRatesMean);
    marketVariance = stats.variance(marketRates, marketRatesMean);

    return topCov / marketVariance;
}

module.exports = { risk };