'use strict'

const store = require('../store')
// const data = require('./auth1/ui')

const showFavesTemplate = require('../templates/favorite-movie-listing.handlebars')

const getFavesSuccess = (data) => {
  console.log(data.favorite_movie.id)
  console.log('hey im here')
  if (data.favorite_movie.id === store.user.id) {
    const showFavesHtml = showFavesTemplate({ favorite_movies: data.favorite_movies })
    $('.content').append(showFavesHtml)
  }
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
