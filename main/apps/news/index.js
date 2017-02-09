'use strict';

var express = require('express');
var controller = require('./news.ctrl')

var router = express.Router();

router.get('/', controller.get);
router.post('/', controller.add);
router.post('/notify', controller.notify);

module.exports = router;
