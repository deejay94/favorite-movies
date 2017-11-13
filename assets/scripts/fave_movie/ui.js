'use strict'
const api = require('./api')

const showFavesTemplate = require('../templates/favorite-movie-listing.handlebars')

const createFaveSuccess = function (data) {
  $('#message4').text('You have successfully added movie to your list').show().fadeOut(1800)
  $('.fave-movie').empty()
  $('.movie-info').trigger('reset')
}

const createFaveFailure = function (data) {
  $('#message4').text('You have NOT successfully added movie to your list').show()
}

const getFavesSuccess = (data) => {
  if (data.favorite_movies.length === 0) {
    $('#message4').text('You have not created any faves to display').show()
  } else {
    const showFavesHtml = showFavesTemplate({ favorite_movies: data.favorite_movies })
    $('.fave-movie').remove()
    $('.content').append(showFavesHtml)
    $('.remove-fave').on('click', function () {
      $(this).parent().parent().parent().remove()
      $('#message').text('You have successfully removed a favorite movie').show().fadeOut(1800)
    })
    $('.delete-fave').on('click', function () {
      $(this).parent().parent().parent().remove()
      $('#message4').text('You have successfully deleted a favorite movie').show().fadeOut(1800)
    })
    $('.editfave').on('click', onEditFave)
  }
}

const onEditFave = function (event) {
  event.preventDefault()
  const id = $(this).parent().parent().attr('data-id')
  const title = $(this).parent().siblings()[1]
  const genre = $(this).parent().siblings()[2]
  const comment = $(this).parent().siblings()[3]
  console.log(id)
  console.log(title)
  title.contentEditable = true
  genre.contentEditable = true
  comment.contentEditable = true
  $(title).css('background-color', 'rgba(255, 255, 0, 0.5)') // Show user editable fields
  $(genre).css('background-color', 'rgba(255, 255, 0, 0.5)')
  $(comment).css('background-color', 'rgba(255, 255, 0, 0.5)')
  $('.savefave').removeClass('hidden')
  $('.editfave').addClass('hidden')
  $('.savefave').on('click', function (event) {
    event.preventDefault()
    onConfirmSave(id, title, genre, comment)
  })
}

const onConfirmSave = function (id, title, genre, comment) {
  const newTitle = $(title).text()
  const newGenre = $(genre).text()
  const newComment = $(comment).text()
  const data = {
    favorite_movie: {
      title: newTitle,
      genre: newGenre,
      comment: newComment
    }
  }
  api.update(data, id)
    .then(updateFaveSuccess)
    .catch(updateFaveFailure)
}

const getFavesFailure = function () {
  $('#message4').text('You have NOT successfully displayed favorite movies').show()
}

const updateFaveSuccess = function () {
  $('#message4').text('You have successfully updated a favorite movie')
  api.index()
    .then(getFavesSuccess)
    .catch(getFavesFailure)
  $('.update-fave').trigger('reset')
}

const updateFaveFailure = function () {
  $('#message4').text('You have NOT successfully updated a favorite movie')
}

const deleteFaveSuccess = function () {
  $('#message4').show().text('Delete success!')
  api.index()
    .then(getFavesSuccess)
    .catch(getFavesFailure)
}

const deleteFavefailure = function () {
  $('#message4').text('You have NOT successfully deleted a favorite movie')
}

const failure = (error) => {
  $('#message4').text(error)
}

module.exports = {
  getFavesSuccess,
  getFavesFailure,
  failure,
  updateFaveFailure,
  updateFaveSuccess,
  deleteFaveSuccess,
  deleteFavefailure,
  createFaveSuccess,
  createFaveFailure
}
