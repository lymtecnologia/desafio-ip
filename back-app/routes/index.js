var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Desafio Intelipost - By Leonardo Y. M.' });
});

module.exports = router;
