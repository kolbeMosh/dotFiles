const getMean = (returnRates) => {

    var total = 0.0;
    var n = 0;

    for (let returnRate in returnRates){
        total += returnRate;
        n += 1;
    }

}

module.exports = { getMean };