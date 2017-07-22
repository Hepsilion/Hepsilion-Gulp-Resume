var express = require('express');
var router = express.Router();

/* render to the resume page. */
router.get('/', function(req, res, next) {
  res.render('index.html');
});

module.exports = router;
