const getFormFields = require(`../../../lib/get-form-fields`)
const api = require('./api')
const ui = require('./ui')

const onCreateFave = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  console.log('Create Fave button working')
  console.log('our data is ', data)
  api.createFave(data)
    .then(ui.createFaveSuccess)
    .catch(ui.createFaveFailure)
}

const onGetFaves = function (event) {
  event.preventDefault()
  api.getFaves()
    .then(ui.getFavesSuccess)
    .catch(ui.getFavesFailure)
}

const addHandlers = function () {
  $('#create-fave').on('submit', onCreateFave)
  $('#get-faves').on('submit', onGetFaves)
}

module.exports = {
  addHandlers
}
