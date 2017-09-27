'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)
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
    const data = getFormFields(event.target)
    console.log('oiiiiiii')
    console.log(event)
    // const data = function () {
    // const newTitle = $(favorite_movie.title).html()
    // const newGenre = $(favorite_movie.genre).html()
    // const newComment = $(favorite_movie.comment).html()
  // }
    console.log(event.target)
    api.update(data)
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
