'use strict'

const api = require('./api.js')
const ui = require('./ui.js')

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
}

module.exports = {
  addHandlers
}
