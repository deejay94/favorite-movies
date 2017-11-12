'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)
const api = require('./api.js')
const ui = require('./ui.js')

$(function () {
  $('#message2').text('New user? Please sign up')
  $('#message3').text('Registered account? Please sign in')
  $('.sign-up').empty()
  $('.sign-in').empty()
  $('#change-password').hide()
  $('#sign-out').hide()
  $('.container').hide()
  $('.movie-info').hide()
})

const onAddFave = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.create(data)
    .then(ui.createFaveSuccess)
    .catch(ui.createFaveFailure)
  $('.content').append(data)
}

const onGetFaves = (event) => {
  event.preventDefault()
  api.index()
    .then(ui.getFavesSuccess)
    .then(function () {
      $('.delete-fave').on('click', onDestroy)
    })
    .catch(ui.getFavesfailure)
}

const onDestroy = function (event) {
  event.preventDefault()
  // console.log($(this).parent().parent().data('id'))
  console.log($('.getfave').data('id'))
  const data = $('.getfave').data('id')
  api.destroy(data)
    .then(() => {
      $('th').hide()
    })
}

const onUpdateFave = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  const id = data.favorite_movie.id
  api.update(data, id)
    .then(ui.updateFaveSuccess)
    .catch(ui.updateFaveFailure)
}

const onClearFaves = (event) => {
  event.preventDefault()
  ui.clearFaves()
}

const addHandlers = () => {
  $('.movie-info').on('submit', onAddFave)
  $('#getFaves').on('click', onGetFaves)
  // $('#clearFaves').on('click', onClearFaves)
  $('.update-fave').on('submit', onUpdateFave)
}

module.exports = {
  addHandlers
}
