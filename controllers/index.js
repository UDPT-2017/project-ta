var home = {
	index:function(req, res, next) {
  var message = "Hello";
  res.render('index', {
     title: 'Express',
     message: message,
   });
}
}

module.exports = home;
