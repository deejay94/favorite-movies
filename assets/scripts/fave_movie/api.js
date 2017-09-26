'use strict'

const config = require('../config.js')

const getFaves = function () {
  return $.ajax({
    url: config.apiOrigin + '/favorite_movies',
    method: 'GET'
  })
}

module.exports = {
  getFaves
}
