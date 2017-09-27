'use strict'

const config = require('../config.js')
const store = require('../store')

const makeFave = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/movies',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const getFaves = function () {
  return $.ajax({
    url: config.apiOrigin + '/favorite_movies',
    method: 'GET'
  })
}

module.exports = {
  getFaves,
  makeFave
}
