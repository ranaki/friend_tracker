var express = require('express');
var router = express.Router();
var Friend = require('../models/friend');

// Friend Finder
/* GET a friend */
router.get('/:name', function(req, res, next) {
 console.log("find this: " + req.params.name);
//  Friend.find({'friend_name': 'req.params.name'}, function(err, friends) {
   Friend.find({'friend_name': req.params.name}, function(err, friends) {
   res.render('friendFind', { friends: friends });
 });
});

/* GET a friend */
router.get('/', function(req, res, next) {
 console.log("find this nothing ");
   Friend.find({'friend_name': ''}, function(err, friends) {
   res.render('friendFind', { friends: friends });
 });
});


module.exports = router;