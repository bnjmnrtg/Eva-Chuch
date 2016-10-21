'use strict'

var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();
var request = require('request');

//===================================================================

router.get('/', function(req, res) {
    res.render('index');
});


module.exports = router;
