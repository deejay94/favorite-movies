const getFormFields = require(`../../../lib/get-form-fields`)

const api = require('./api')
const ui = require('./ui')
// const logic = require('./gamelogic')
// const store = require('../store')

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
}

const onCreateFave = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.createFave(data)
    .then(ui.createFaveSuccess)
    .catch(ui.createFaveFailure)
}

const OnUpdateFave = function () {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.updateFave(data)
    .then(ui.updateFaveSuccess)
    .catch(ui.updateFaveFailure)
}

const onGetFaves = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.index(data)
    .then(ui.onSuccess)
    .catch(ui.onError)
}

const addHandlers = function () {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#change-password').on('submit', onChangePassword)
  $('#sign-out').on('submit', onSignOut)
  $('#create-fave').on('click', onCreateFave)
  $('#faves-search').on('click', onGetFaves)
}

module.exports = {
  addHandlers,
  onCreateFave,
  OnUpdateFave,
  onGetFaves
}
