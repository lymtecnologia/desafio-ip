var express = require('express');
var router = express.Router();

var fs = require('fs');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Deploy status API');
});

/* GET users listing. */
router.get('/deploy', function(req, res, next) {

  var name = req.query.name;
  var action = req.query.action;
  var status = req.query.status;
  var data = new Date();

  fs.appendFile('./public/deploys.csv', data + ";" + name + ';' + action + ';' + status + "\n", function (err) {
    if (err) throw err;
      console.log('Updated!');
  });
  res.send('Deploy status saved');
});


module.exports = router;
