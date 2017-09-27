'use strict'

const config = require('../config.js')
const store = require('../store')

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
const create = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/favorite_movies',
    method: 'POST',
    data: '{}',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const update = function (title, genre, comment) {
  console.log(store)
  return $.ajax({
    url: config.apiOrigin + '/favorite_movies/' + store.user.id,
    method: 'PATCH',
    data: {
      'favorite_movie': {
        'title': title,
        'genre': genre,
        'comment': comment
      }
    },
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const index = function () {
  console.log('getting faves')
  return $.ajax({
    url: config.apiOrigin + '/favorite_movies',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const destroy = function (data) {
  console.log('store.id')
  console.log(data)
  console.log(store.id)
  return $.ajax({
    url: config.apiOrigin + '/favorite_movies/' + data,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  index,
  destroy,
  update,
  create
  // create,
  // update
}
