//business Logic
//user object construct
var User = function (username, email, password) {
  this.UserName = username;
  this.UserEmail = email;
  this.UserPassword = password;
  this.webName = [];
}
User.prototype.webName = Math.random();
//User Logic
$(document).ready(function (event) {
  $('#rightDesc form').submit(function () {
    var username = $('input #userName').val();
    var email = $('input #userEmail').val();
    var password = $('input #userPassword').val();

    var user1 = new User(username, email, password)
    $('#profilecard h1').text(user1.username);
    $('#profilecard #email').text(user1.UserEmail);
  })
  //create user object


  // user story one.
  $('#celebrateHealth, a#link1').click(function (event) {
    event.preventDefault()

    $('#story1').show()
  })
  //toggling user story
  $('#closeStory').click(function () {
    $('#story1').hide()

  })
  // user story 2.
  $('#coupleStress, a#link2').click(function (event) {
    event.preventDefault()
    $('#story2').show()
  })
  $('#closeStory2').click(function () {
    $('#story2').hide()
  })
  // user story 3
  $('a#link3, #mindCleansing').click(function (event) {
    event.preventDefault()
    $('#story3').show()
  })
  $('#closeStory3').click(function () {
    $('#story3').hide()
  })
  // user story 4
  $('#crashing, a#link4').click(function (event) {
    event.preventDefault()
    $('#story4').show()
  })
  $('#closeStory4').click(function () {
    $('#story4').hide()
  })
  // user story 5
  $('#isolation, a#link5').click(function (event) {
    event.preventDefault()
    $('#story5').show()
  })
  $('#closeStory5').click(function () {
    $('#story5').hide()
  })
  // user story 6
  $('#strugglesWoman, a#link6').click(function (event) {
    event.preventDefault()
    $('#story6').show()
  })
  $('#closeStory6').click(function () {
    $('#story6').hide()
  })
  // signup page.//toggling signup page on all pages
  $('#signUpPage').click(function (event) {
    event.preventDefault()
    $('#signupCont').show()
  })
  $('button#cancel').click(function (event) {
    event.preventDefault()
    $('#signupCont').hide()
  })
  //sharing users view on the discussion
  $('form#addComment1 .shareButton').click(function (event) {
    event.preventDefault();
    var comment = $('#addComment1 input').val();
    $('.comments').prepend("<p id='comment9'>" + comment + "</p>");
    $('form#addComment1').reset();
  })
  $('form#addComment2 .shareButton').click(function (event) {
    event.preventDefault();
    var comment = $('#addComment2 input').val();
    $('.comments').prepend("<p id='comment9'>" + comment + "</p>");
    $('form#addComment2').reset();
  })
  //readmore button opening the entire content of comment p
  $('.comments p').after('<div class="interaction"><p class="readMore">Read More...</p><p class="replyTo">&downdownarrows;Reply</p></div><hr>');
  $('.readMore').click(function (event) {
    event.preventDefault();
    $('#comment1 p').first().css('height', '60vh')
  })
  $('.readMore').click(function (event) {
    event.preventDefault();
    $('.comment1 p').first().css('height', '60vh')
  })
  //adding replies to comments
  $('.replyTo').click(function (event) {
    event.preventDefault()
    $('.replyTo').after('<form id="userReply">' +
      '<input type="text" id="userReply" name="userReply" width="50px">' +
      '<button type="submit" class="submit-reply btn btn-warning">Send</button>'
      + '</form>')
    $('form#userReply').submit(function (event) {
      event.preventDefault();
      var Replys = '<p id="Replys">' + $('form#userReply input').val() + '</p>';
      $('#comment1 p').first().append(Replys)
      $('.comment1 p').first().append(Replys)
      $('form#userReply').hide();
      $('#comment1 p').first().css('overflow', 'auto')
    })
  })
  //Side bar toggling on smaller screens
  $('#sidebarButton').click(function (event) {
    event.preventDefault();
    $('#sidebar').toggle();
  })
  $('#close1').click(function (event) {
    event.preventDefault();
    $('#forum1').hide();
  })
  $('#close2').click(function (event) {
    event.preventDefault();
    $('#forum2').hide();
  })
  $('#forum1Link').click(function (event) {
    event.preventDefault();
    $('#forum1').show();
  })
  $('#forum2Link').click(function (event) {
    event.preventDefault();
    $('#forum2').show();
  })
  //sharing users view on the discussion
  $('form#addComment1 .shareButton').click(function (event) {
    event.preventDefault();
    var comment = $('#addComment1 input').val();
    console.log(comment)
    $('.comments').prepend("<p id='comment9'>" + comment + "</p>");
    $('#addComment1').reset();
  })
})