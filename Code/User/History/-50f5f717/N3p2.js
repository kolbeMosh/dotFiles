const covariance = (returnValues, returnValueMean, marketReturnValues, marketReturnValuesMean) => {
    var total = 0.0;
    var num = 0;

    for (let i = 0; i < returnValues.length; i++){
        total += ((returnValues[i] - returnValueMean) * (marketReturnValues[i] - marketReturnValuesMean));
        num += 1;

    }
    
    return total / (num - 1);
}

const variance = (returnRates, mean) => {
    var total = 0.0;
    var n = 0;

    for (let returnRate in returnRates){
        total += (returnRate - mean) ** 2;
        n += 1;
    }

    return total / (n - 1);
}

const stDev = (returnRates, mean) => {
    var total = 0.0;
    var n = 0;

    for (let returnRate in returnRates){
        total += (returnRate - mean) ** 2;
        n += 1;
    }

    return (total / (n-1)) ** (1/2);
}

const getMean = (returnRates) => {

    var total = 0.0;
    var n = 0;

    for (let returnRate in returnRates){
        total += returnRate;
        n += 1;
    }

    return total / n;

}