var express = require('express');
var postcl = require('../controllers/postcl');
var userHandlers = require('../controllers/usercl');
var router = express.Router();

router.post('/addpost',postcl.addPost);
router.post('/loadpost',postcl.loadPost);


module.exports = router;
