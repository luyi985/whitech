const createError = require('http-errors');
const loadList = (req, res, next) => {
    try {
        req.productList = require('../data/products.json');
        next();
    } catch (e) {
        next(createError(500, e.message));
    }
};

module.exports = loadList;
