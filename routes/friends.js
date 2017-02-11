var express = require('express');
var router = express.Router();
var Friend = require('../models/friend');

/* GET friend listings. */
router.get('/', function(req, res, next) {
 Friend.find( function ( err, friends, count ) {
   res.render('friends', { friends: friends });
 });
});

/* POST a new friend */
router.post('/', function(req, res, next) {
 new Friend({
   friend_name: req.body.friend_name,
   friend_note: req.body.friend_note,
   note_create_date : Date.now()
 }).save( function( err, friend, count ) {
   res.redirect('/friends');
 });
});

/* GET a friend */
router.get('/:id', function(req, res, next) {
 Friend.findById(req.params.id, function(err, friend) {
   res.render('friend', { friend: friend });
 });
});

/* EDIT a friend */
router.post('/edit/:id', function(req, res, next) {
 Friend.findById( req.params.id, function(err, friend) {
   friend.friend_name = req.body.friend_name,
   friend.friend_note = req.body.friend_note,
   friend.note_create_date = Date.now();
   friend.save( function(err, friend, count) {
     res.redirect('/friends');
   });
 });
});

router.put('/:id', function(req, res) {
    var body = {
        friend_name: req.body.friend_name, 
        friend_note: req.body.friend_note, 
        note_create_date: Date.now() 
    };

    Friend.findByIdAndUpdate( req.params.id, { $set: body }, function(err, song) {
            res.redirect('/friends/' + req.params.id);
    });
});

/* DELETE a friend */
router.post('/:id', function(req, res, next) {
 Friend.findById(req.params.id, function(err, friend) {
   friend.remove( function(err, friend) {
     res.redirect('/friends');
   });
  });
});

router.delete('/:id', function(req, res, next) {
 Friend.findById(req.params.id, function(err, friend) {
   friend.remove( function(err, friend) {
     res.redirect('/friends');
   });
  });
});


module.exports = router;