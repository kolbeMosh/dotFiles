const getReturnRates = require('');
const { getMean } = require('./getMean');

const getSharp = (company) => {
    returnRates = getReturnRates(company);

    var m = getMean(returnRates);
    var 
}