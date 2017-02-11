var mongoose = require( 'mongoose' );
var Schema = mongoose.Schema;
var Friend = new Schema({
  friend_name : String,
  friend_note : String,
  note_id : String,
  friend_group: String,
  note_create_date : Date
});

module.exports = mongoose.model( 'Friend', Friend );