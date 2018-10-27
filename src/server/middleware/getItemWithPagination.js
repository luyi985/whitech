const Pagination = require('../helper/pagination');
const createError = require('http-errors');

const getItemWithPagination = (req, res, next) => {
    try {
        if (!Array.isArray(req.productList) || !req.productList.length) {
            throw new Error('Could not find productlist');
        }

        const { page, perPage } = req.query;
        const pagination = new Pagination(req.productList, parseInt(perPage));

        res.json(pagination.getItems(parseInt(page)));
    } catch (e) {
        next(createError(500, e.message));
    }
};

module.exports = getItemWithPagination;
