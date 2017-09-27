'use strict'

// const getFormFields = require(`../../../lib/get-form-fields`)
const api = require('./api.js')
const ui = require('./ui.js')

// const onCreateFave = function (event) {
//   event.preventDefault()
//   const data = getFormFields(event.target)
//   api.createFave(data)
//     .then(ui.createFaveSuccess)
//     .catch(ui.createFaveFailure)
// }

const onGetFaves = (event) => {
  console.log('heyyy')
  event.preventDefault()
  api.getFaves()
    .then(ui.getFavesSuccess)
    .catch(ui.failure)
}

const onClearFaves = (event) => {
  event.preventDefault()
  ui.clearFaves()
}

const addHandlers = () => {
  $('#getFaves').on('click', onGetFaves)
  $('#clearFaves').on('click', onClearFaves)
  // $('#create-fave').on('click', onCreateFave)
}

module.exports = {
  addHandlers
}
