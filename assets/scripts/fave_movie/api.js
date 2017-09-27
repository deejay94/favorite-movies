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
  return $.ajax({
    url: config.apiOrigin + '/favorite_movies/' + store.favorite_movie.id,
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

const destroy = function () {
  console.log(store)
  return $.ajax({
    url: config.apiOrigin + '/favorite_movies/' + store.id,
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
