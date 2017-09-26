const getFormFields = require(`../../../lib/get-form-fields`)
const api = require('./api')
const ui = require('./ui')

const onAddFave = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  console.log('Add Fave button working')
  console.log(data)
  api.addFave(data)
    .then(ui.addFaveSuccess)
    .catch(ui.addFaveFailure)
  $('.content').append(data)
}

const onGetFaves = function (event) {
  event.preventDefault()
  api.getFaves()
    .then(ui.getFavesSuccess)
    .catch(ui.getFavesFailure)
}

const onClearFaves = () => {
  $('.list').empty()
}

const addHandlers = function () {
  $('.movie-info').on('submit', onAddFave)
  $('#getFaves').on('submit', onGetFaves)
  $('.list').on('submit', onClearFaves)
}
module.exports = {
  addHandlers
}
