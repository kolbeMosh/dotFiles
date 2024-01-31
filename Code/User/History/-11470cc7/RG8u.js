const calcInvestTime = (principle, goal, portfolio) => {
    var runningTotal = 0.0;
    for (let i = 0; i < portfolio.length; i++){
        runningTotal += portfolio[i].weight*assetReturn
    }
}

modules.export = { calcInvestTime };