const showFavesTemplate = require('../templates/favorite-movie-listing.handlebars')

const createFaveSuccess = function (data) {
  console.log('You have Successfully added movie to your list')
  $('#message').text('You have successfully added movie to your list')
  console.log(data)
}
const createFaveFailure = function () {
  console.log('Add Fave failure')
  $('#message').text('You have failed to add a movie to your list')
}
const getFavesSuccess = function (data) {
  console.log(data)
  console.log('List of movies attained')
  $('#message').text('Here is your to-watch list')
  const showFavesHtml = showFavesTemplate({ favorite_movies: data.favorite_movies })
  $('#list').append(showFavesHtml)
}

const getFavesFailure = function () {
  console.error('error getting movies')
}

module.exports = {
  createFaveSuccess,
  createFaveFailure,
  getFavesFailure,
  getFavesSuccess
}
