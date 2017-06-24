var express = require('express');
var router = express.Router();
var index = require('../controllers/index');
var userHandlers = require('../controllers/usercl');

/* GET home page. */
router.get('/',index.home);

router.get('/title',index.loadTitle);
router.put('/title',userHandlers.loginRequired,index.updateTitle);
router.get('/getpost',index.load5Post);
router.post('/login',userHandlers.login);
router.post('/reg',userHandlers.loginRequired,userHandlers.addUser);



module.exports = router;
