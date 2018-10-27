const express = require('express');
const router = express.Router();
const queryValidator = require('../middleware/queryValidtor');
const loadList = require('../middleware/loadList');
const getItemWithPagination = require('../middleware/getItemWithPagination');

router.get('/', 
  queryValidator,
  loadList,
  getItemWithPagination
);

module.exports = router;
