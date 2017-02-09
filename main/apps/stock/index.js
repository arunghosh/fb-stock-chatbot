'use strict';

var express = require('express');
var controller = require('./stock.ctrl')

var router = express.Router();

router.get('/', controller.get);
router.post('/', controller.addOrUpdate);

module.exports = router;

