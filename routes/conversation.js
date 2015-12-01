'use strict';

var express = require('express');
var router = express.Router();
var ensureAuthenticated = require('../config/ensureAuthenticated.js')
var User = require('../models/user.js')
var Conversation = require('../models/conversation.js');

router.post('/:id1/:id2', ensureAuthenticated, function(req, res) {
  Conversation.makePost(req.params, req.body, function(err, convo){
    if (err) return res.status(400).send('error posting convo');
    res.status(200).send(convo);
  })
});

router.get( '/:id1/:id2', ensureAuthenticated, function(req, res){
  console.log('getting convos', req.params)
  Conversation.getConvo(req.params, function(err, convo){
    if (err) return res.send('error getting convo');
    res.send(convo)
  })
})

module.exports = router;
