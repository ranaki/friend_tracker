$(document).ready( function() {
  var $friend_name = $('#friend_name');
  var $friend_note = $('#friend_note');
  var originalFriendName = $friend_name.val();
  var originalFriendNote = $friend_note.val();

  function toggleForm() {
    $edit = $('#edit');
    $edit.toggleClass('hide');
    $edit[0].reset();
    $('#edit_button').toggleClass('hide');
  }

  function livePreview() {
    $('h1').html($friend_name.val());
    $('p').html($friend_note.val());
  }

  $('#edit_button').click( function() {
    toggleForm();
  });

  $('#cancel').click( function() {
    $('h1').text(originalFriendName);
    $('p').text(originalFriendNote);
    toggleForm();
  });

  $('#friend_name').on('keyup', function() {
    livePreview();
  });

  $('#friend_note').on('keyup', function() {
    livePreview();
  });

});
