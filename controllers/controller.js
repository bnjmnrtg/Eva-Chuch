'use strict'

var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();
var request = require('request');

//===================================================================

router.get('/', function(req, res) {
    res.render('index');
});

router.get('/cleaning', function(req, res) {
    res.render('cleaning_schedule');
});


module.exports = router;
