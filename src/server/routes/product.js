const express = require('express');
const router = express.Router();
const allProducts = require('../data/products.json');
const createError = require('http-errors');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json(allProducts);
});

module.exports = router;
