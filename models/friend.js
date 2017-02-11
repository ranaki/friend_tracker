var mongoose = require( 'mongoose' );
var Schema = mongoose.Schema;

var Friend = new Schema({
  friend_name : {type: String, required: true},
  friend_note : {type: String, required: true},
  note_id : String,
  friend_group: String,
  note_create_date : Date
});

module.exports = mongoose.model( 'Friend', Friend );