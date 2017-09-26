'use strict'

const store = require('../store')
// const data = require('./auth1/ui')

const showFavesTemplate = require('../templates/favorite-movie-listing.handlebars')

const getFavesSuccess = (data) => {
  console.log(data)
  console.log('hey im here')
    const showFavesHtml = showFavesTemplate({ favorite_movie: data.favorite_movies })
    $('.content').append(showFavesHtml)
  }

const clearFaves = () => {
  $('.content').empty()
}

const failure = (error) => {
  console.error(error)
}

module.exports = {
  getFavesSuccess,
  clearFaves,
  failure
}
