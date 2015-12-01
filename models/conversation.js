'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var moment = require('moment');

var Conversation;

var conversationSchema = Schema({
  u1: { type: mongoose.Schema.Types.UserId , ref: 'User' },
  u2: { type: mongoose.Schema.Types.UserId , ref: 'User' },
  posts: [ { 
    sender: { type: mongoose.Schema.Types.UserId , ref: 'User' },
    date: { type: Date, default: Date.now },
    message: { type: String }
  } ]

});

User = mongoose.model('User', userSchema);
module.exports = User;
