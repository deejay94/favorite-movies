'use strict'
// const api = require('./api')
// const store = require('../store')
// const data = require('./auth1/ui')

const showFavesTemplate = require('../templates/favorite-movie-listing.handlebars')

// const createFaveSuccess = function (data) {
//   $('#message').text('Successfully created fave')
//   store.favorite_movie = data.favorite_movie
//   console.log(data.favorite_movie)
//   console.log(store.favorite_movie)
// }

// const createFaveFailure = function () {
//   $('#message').text('Error on creating a game')
// }

const getFavesSuccess = (data) => {
  console.log(data.favorite_movie)
  console.log(data)
  console.log('hey im here')

  const showFavesHtml = showFavesTemplate({ favorite_movies: data.favorite_movies })
  $('.content').append(showFavesHtml)
  $('.remove-fave').on('click', function () {
    $(this).parent().parent().remove()
    console.log(this)
  })
  $('.delete-fave').on('click', function () {
    $(this).parent().parent().remove()
  })
}

const updateFaveSuccess = function () {
  $('#message').text('You have successfully deleted a favorite movie')
}

const updateFaveFailure = function () {
  $('#message').text('You have successfully deleted a favorite movie')
}

const deleteFaveSuccess = function () {
  $('#message').text('You have successfully deleted a favorite movie')
}

const deleteFavefailure = function () {
  $('#message').text('You have NOT successfully deleted a favorite movie')
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
  failure,
  updateFaveFailure,
  updateFaveSuccess,
  // createFaveFailure,
  deleteFaveSuccess,
  deleteFavefailure
  // createFaveSuccess
}
