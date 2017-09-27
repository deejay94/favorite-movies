'use strict'

const config = require('../config.js')
// const store = require('../store')

// const createFave = function (data) {
//   return $.ajax({
//     url: config.apiOrigin + '/favorite_movies',
//     method: 'POST',
//     headers: {
//       Authorization: 'Token token=' + store.user.token
//     },
//     data
//   })
// }

const getFaves = function () {
  return $.ajax({
    url: config.apiOrigin + '/favorite_movies',
    method: 'GET'
  })
}

const deleteFave = function (event) {
  event.preventDefault()
  // what does this click handler get as an argument by default?
  // something called `event`. But what it is event!?! What is event.target?!
  console.log('event.target is', event.target)
  // is there anything useful in here ^  ^  ^  ????

  const bookId = event.target.getAttribute('data-id')
  console.log("We're about to delete book with id: ", bookId)
  // where does `data-id` come from? Do a cmd + shift + f and search for data-id

  // what do I need to do now that I have the id?!?
}

module.exports = {
  getFaves,
  deleteFave
  // createFave
}
