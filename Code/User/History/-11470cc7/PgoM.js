const calcInvestTime = (goal, portfolio) => {
    var runningTotal = 0.0;
    for (let i = 0; i < portfolio.length; i++){
        runningTotal += portfolio[i].weight*portfolio[i].assetReturn;
    }

    annualReturn = runningTotal*261;

    return goal/annualReturn;
}

modules.export = { calcInvestTime };