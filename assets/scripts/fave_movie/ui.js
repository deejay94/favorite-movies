'use strict'
const api = require('./api')

const showFavesTemplate = require('../templates/favorite-movie-listing.handlebars')

const createFaveSuccess = function (data) {
  $('#message').text('You have successfully added movie to your list')
  $('.fave-movie').empty()
  $('.movie-info').trigger('reset')
}

const createFaveFailure = function (data) {
  $('#message').text('You have NOT successfully added movie to your list')
}

const getFavesSuccess = (data) => {
  if (data.favorite_movies.length === 0) {
    $('#message').text('You have not created any faves to display')
  } else {
    // $('#clearFaves').show()
    const showFavesHtml = showFavesTemplate({ favorite_movies: data.favorite_movies })
    $('.fave-movie').remove()
    $('.content').append(showFavesHtml)
    $('.remove-fave').on('click', function () {
      $(this).parent().parent().remove()
      $('#message').text('You have successfully removed a favorite movie')
    })
    $('.delete-fave').on('click', function () {
      $('#message').text('You have successfully deleted a favorite movie')
      $(this).parent().parent().remove()
    })
  }
}

const getFavesFailure = function () {
  $('#message').text('You have NOT successfully displayed favorite movies')
}

const updateFaveSuccess = function () {
  $('#message').text('You have successfully updated a favorite movie')
  api.index()
    .then(getFavesSuccess)
    .catch(getFavesFailure)
  $('.update-fave').trigger('reset')
}

const updateFaveFailure = function () {
  $('#message').text('You have NOT successfully updated a favorite movie')
}

const deleteFaveSuccess = function () {
  $('#message').text('You have successfully deleted a favorite movie')
}

const deleteFavefailure = function () {
  $('#message').text('You have NOT successfully deleted a favorite movie')
}

// const clearFaves = () => {
//   api.index()
//   $('#message').text('You have successfully cleared a favorite movie')
//   $('.content').empty()
// }

const failure = (error) => {
  $('#message').text(error)
}

module.exports = {
  getFavesSuccess,
  getFavesFailure,
  // clearFaves,
  failure,
  updateFaveFailure,
  updateFaveSuccess,
  deleteFaveSuccess,
  deleteFavefailure,
  createFaveSuccess,
  createFaveFailure
}
