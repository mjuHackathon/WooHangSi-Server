var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
  res.send('Welcome to WooHangSi');
});

module.exports = router;