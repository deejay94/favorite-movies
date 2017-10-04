'use strict'

const config = require('../config.js')
const store = require('../store')

// const create = function (data) {
//   return $.ajax({
//     url: config.apiOrigin + '/favorite_movies',
//     method: 'POST',
//     data: '{}',
//     headers: {
//       Authorization: 'Token token=' + store.user.token
//     }
//   })
// }

const create = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/favorite_movies',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const update = function (data, id) {
  console.log('updating')
  return $.ajax({
    url: config.apiOrigin + '/favorite_movies/' + id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const index = function () {
  return $.ajax({
    url: config.apiOrigin + '/favorite_movies',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const destroy = function (data) {
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
}
