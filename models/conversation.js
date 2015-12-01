'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var moment = require('moment');

var Conversation;

var conversationSchema = Schema({
  talkers: { 
    type:[ { type: mongoose.Schema.Types.ObjectId , ref: 'User' } ],
    validate: [ arrayLimit, '{PATH} exceeds the limit of 2' ]
  },
  posts: {
    type: [ { 
      sender: { type: mongoose.Schema.Types.ObjectId , ref: 'User' },
      date: { type: Date, default: Date.now },
      message: { type: String }
    } ]
  } 
});

conversationSchema.statics.getConvo = function(params, cb){
  var talkers = [params.id1, params.id2].sort();
  console.log(talkers)
  Conversation.findOne({talkers : talkers}, function(err, convo){
    if (err) {
      console.log(err)
      return cb(err);
    }
    cb(null, convo || '0');
  })
}

conversationSchema.statics.makePost= function(params, body, cb){
  Conversation.getConvo(params, function(err,convo){
    console.log('got conversation :', convo)
    var post = {
          sender: body.sender,
          date: body.date,
          message: body.message
        } ;

    if (err) {
      console.log(err);
      return cb(err);
    }
    if (convo === '0') {
      var talkers = [ params.id1, params.id2 ].sort();
      var posts = [ post ];
      console.log('creating new convo', talkers, posts)
      Conversation.create({talkers: talkers, posts: posts}, function (err, convo){
        if (err) {
          console.log(err);
          return cb(err);
        }
        return cb(null, convo);
      })
      return
    }
    convo.posts.push(post);
    convo.save(function(err,savedConvo){
      if (err) {
        console.log(err);
        return cb(err);
      }
      console.log('this is hopefully an convo: ', savedConvo)
      return cb(null, savedConvo)
    })

  })
}

function arrayLimit(val) {
  return val.length <= 2;
}

Conversation = mongoose.model('Conversation', conversationSchema);
module.exports = Conversation;
