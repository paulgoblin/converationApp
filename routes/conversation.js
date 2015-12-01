'use strict';

var express = require('express');
var router = express.Router();
var ensureAuthenticated = require('../config/ensureAuthenticated.js')
var User = require('../models/user.js')
// var Conversation = require('../models/conversation.js')

router.post('/:id1/:id2', ensureAuthenticated, function(req, res) {
  console.log('got params: ', req.params.id1, req.params.id2);
  res.status(200).send(req.params);
});

// router.get( '/', ensureAuthenticated, function(req, res){
//   User.find( {}, function(err, users){
//     if (err) return res.status(400).send(err.message);
//     res.status(200).send(users);
//     console.log('got all users',users)
//   })
// })

module.exports = router;
