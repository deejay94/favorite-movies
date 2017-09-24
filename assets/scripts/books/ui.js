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
  $('#create-game').show()
  $('.games').show()
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
  $('.games').hide()
  $('#message3').text('')
  $('#create-game').hide()
  $('#message2').text('')
  $('#sign-up').show()
  $('.box').text('')
  $('#sign-in').show()
  store.clickCounter = 0
}

const signOutFailure = function () {
  $('#message').text('Error on sign out')
}

const createGameSuccess = function (data) {
  $('#message').text('Successfully created game')
  store.game = data.game
  $('.box').show()
}

const createGameFailure = function () {
  $('#message').text('Error on creating a game')
}

const updateGameSuccess = function (data) {
  $('#message').text('Successfully updated game')
  store.game = data.game
}

const updateGameFailure = function () {
  $('#message').text('Error on updating a game')
}

const onSuccess = function (data) {
  if (data.games) {
    $('#message2').text('You have played ' + data.games.length + ' game(s)!')
  } else {
  }
}

const onError = function (response) {
  $('#message').text('Error on getting number of games played')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutFailure,
  signOutSuccess,
  createGameSuccess,
  createGameFailure,
  updateGameSuccess,
  updateGameFailure,
  onSuccess,
  onError
}
