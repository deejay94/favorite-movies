const store = require('../store')
// const logic = require('./gamelogic')

const signUpSuccess = function () {
  $('#message').text('Successfully signed up')
}

const signUpFailure = function () {
  $('#message').text('Error on sign up')
}

const signInSuccess = function (data) {
  $('#message').text('Successfully signed in')
  store.user = data.user
  $('#change-password').show()
  $('#sign-up').trigger('reset')
  $('#sign-out').show()
  $('#sign-up').hide()
  $('.box').off()
  $('#sign-in').hide()
}

const signInFailure = function () {
  $('#message').text('Error on sign in')
}

const changePasswordSuccess = function () {
  $('#message').text('Successfully changed password')
}

const changePasswordFailure = function () {
  $('#message').text('Error on change password')
}

const signOutSuccess = function () {
  $('#message').text('Successfully signed out')
  $('#sign-in').trigger('reset')
  $('#sign-out').hide()
  $('#sign-up').show()
  $('.box').text('')
  $('#sign-in').show()
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
