const store = require('../store')

const signUpSuccess = function () {
  $('#message').text('Successfully signed up. Please sign-in')
  $('#sign-up').hide()
  $('#message2').hide()
}

const signUpFailure = function () {
  $('#message').text('Error on sign up')
}

const signInSuccess = function (data) {
  $('#message').text('Successfully signed in').fadeOut(1800)
  $('#message2').hide()
  $('#message3').hide()
  store.user = data.user
  $('#change-password').show()
  $('#sign-up').trigger('reset')
  $('#sign-out').show()
  $('#sign-up').hide()
  $('.box').off()
  $('#sign-in').hide()
  $('.container').show()
  $('.movie-info').show()
  $('.content').show()
  $('.auth-box').hide()
}

const signInFailure = function () {
  $('#message').text('Error on sign in')
}

const changePasswordSuccess = function () {
  $('#message').text('Successfully changed password').show().fadeOut(1800)
  $('#change-password').trigger('reset')
}

const changePasswordFailure = function () {
  $('#message').text('Error on change password').show()
}

const signOutSuccess = function () {
  $('#message').text('Registered account? Please sign in')
  $('#message2').text('New user? Please sign up')
  $('#sign-out').hide()
  $('#sign-up').show()
  $('#sign-in').show()
  $('.fave-movie').hide()
  $('.movie-info').hide()
  $('#change-password').hide()
  $('.container').hide()
  $('#message2').show()
  $('#message3').show()
  $('form').trigger('reset')
  $('.auth-box').show()
}

const signOutFailure = function () {
  $('#message').text('Error on sign out')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutFailure,
  signOutSuccess
}
