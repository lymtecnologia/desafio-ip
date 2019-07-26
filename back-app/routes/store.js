var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Deploy status API');
});

/* GET users listing. */
router.get('/deploy', function(req, res, next) {
  res.send('Deploy status saved');
});


module.exports = router;
