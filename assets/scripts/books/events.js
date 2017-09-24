const getFormFields = require(`../../../lib/get-form-fields`)

const api = require('./api')
const ui = require('./ui')
const logic = require('./gamelogic')
const store = require('../store')

const onSignUp = function (event) {
  const data = getFormFields(event.target)
  event.preventDefault()
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  const data = getFormFields(event.target)
  event.preventDefault()
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onChangePassword = function (event) {
  const data = getFormFields(event.target)
  event.preventDefault()
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const onSignOut = function (event) {
  const data = getFormFields(this)
  console.log(data)
  event.preventDefault()
  api.signOut(data)
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
  $('.box').hide()
  $('#change-password').hide()
}

const onCreateGame = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.createGame(data)
    .then(ui.createGameSuccess)
    .catch(ui.createGameFailure)
  $('.box').text('')
  $('.box').on('click', logic.displayLetter)
  $('.box').on('click', logic.whoWon)
  $('#message3').text('')
  store.clickCounter = 0
}

const OnUpdateGame = function () {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.updateGame(data)
    .then(ui.updateGameSuccess)
    .catch(ui.updateGameFailure)
}

const onGetGames = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.index(data)
    .then(ui.onSuccess)
    .catch(ui.onError)
}

const addHandlers = function () {
  $('.box').on('click', logic.displayLetter)
  $('.box').on('click', logic.whoWon)
  $('.reset').on('click', logic.newGame)
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#change-password').on('submit', onChangePassword)
  $('#sign-out').on('submit', onSignOut)
  $('#create-game').on('click', onCreateGame)
  $('#games-search').on('click', onGetGames)
}

module.exports = {
  addHandlers,
  onCreateGame,
  OnUpdateGame,
  onGetGames
}
