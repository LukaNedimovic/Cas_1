var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', function(req, res, next) {
	console.log("Post request je primljen");
	console.log("Ovo su informacije: ", req.body.info);
	res.send("Ovo je respond");
});

module.exports = router;
