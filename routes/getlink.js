var express = require('express');
var router = express.Router();
var getlink = require('../controllers/getlink');
/* GET users listing. */
router.get('/', getlink.index);

module.exports = router;
