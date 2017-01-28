
'use strict';

var express = require('express');
var controller = require('./user.ctrl')

var router = express.Router();

router.get('/:id', controller.get);
// TODO: Auth
router.put('/:id', controller.update);

module.exports = router;

