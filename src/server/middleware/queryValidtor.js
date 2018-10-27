const createError = require('http-errors');
const queryValidator = (req, res, next) => {
    try {
        const { page, perPage } = req.query;

        if (!parseInt(page)) throw new Error('page is not a number');
        if (!parseInt(perPage)) throw new Error('perPage is not a number');

        next();
    } catch (e) {
        next(createError(500, e.message));
    }
};

module.exports = queryValidator;
