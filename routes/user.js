var express = require('express');
var router = express.Router();
var user = require('../controllers/usercl');
var userHandlers = require('../controllers/usercl');

/* GET home page. */
router.get('/login',user.login);
router.post('/checklogin',user.checklogin);
router.get('/',user.userpage);



module.exports = router;
