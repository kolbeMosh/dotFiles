const calcInvestTime = (principle, goal, portfolio) => {
    var runningTotal = 0.0;
    for (let i = 0; i < portfolio.length; i++){
        runningTotal += portfolio[i].weight*portfolio[i].assetReturn;
    }

    annualReturn = runningTotal*261;
    
}

modules.export = { calcInvestTime };