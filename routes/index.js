var express = require('express');
var router = express.Router();
var home = require('../controllers/index');

/* GET home page. */
router.get('/',home.index);

module.exports = router;