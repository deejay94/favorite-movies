'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)
const api = require('./api.js')
const ui = require('./ui.js')

$(function () {
  $('#message').text('New user? Please sign up')
  $('#message2').text('Registered account? Please sign in')
  $('.sign-up').empty()
  $('.sign-in').empty()
  $('#change-password').hide()
  $('#sign-out').hide()
  $('.container').hide()
  $('.movie-info').hide()
  // $('.box').hide()
})

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
  api.index()
    .then(ui.getFavesSuccess)
    .then(function () {
      $('.delete-fave').on('click', onDestroy)
    })
    .catch(ui.getFavesfailure)
}

const onDestroy = function (event) {
  event.preventDefault()
  console.log('deleting')
  console.log($(this).parent().parent().data('id'))
  api.destroy($(this).parent().parent().data('id'))
  // what does this click handler get as an argument by default?
  // something called `event`. But what it is event!?! What is event.target?!
  console.log('event.target is', event.target)
  // is there anything useful in here ^  ^  ^  ????

  const bookId = event.target.getAttribute('data-id')
  console.log("We're about to delete book with id: ", bookId)
  // where does `data-id` come from? Do a cmd + shift + f and search for data-id

  // what do I need to do now that I have the id?!?
}

const onUpdateFave = function (event) {
    event.preventDefault()
    const data = getFormFields(this)
    console.log('oiiiiiii')
    console.log(data.favorite_movie.id)
    console.log(this)
    const id = data.favorite_movie.id
    console.log('showing data')
    console.log(data)
    api.update(data, id)
      .then(ui.updateFaveSuccess)
      .catch(ui.updateFaveFailure)
  }

const onClearFaves = (event) => {
  event.preventDefault()
  ui.clearFaves()
}

const addHandlers = () => {
  $('#getFaves').on('click', onGetFaves)
  $('#clearFaves').on('click', onClearFaves)
  $('.update-fave').on('click', onUpdateFave)
  // $('#create-fave').on('click', onCreateFave)
}

module.exports = {
  addHandlers
}
