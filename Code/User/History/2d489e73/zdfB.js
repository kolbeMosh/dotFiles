const getIndex = (req, res, next) => {

    res.json({"Message": "Hello World"});
    res.json({"obj": [{}]});

}

module.exports = {

    getIndex

}
