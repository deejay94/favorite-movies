const config = require('../config')
const store = require('../store')

const signUp = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/sign-up',
    method: 'POST',
    data
  })
}

const signIn = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/sign-in',
    method: 'POST',
    data
  })
}

const changePassword = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/change-password/' + store.user.id,
    method: 'PATCH',
    data,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const signOut = function () {
  console.log(store.user)
  return $.ajax({
    url: config.apiOrigin + '/sign-out/' + store.user.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const createList = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/favorite_movies',
    method: 'POST',
    data: '{}',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateList = function (title, genre, comment) {
  return $.ajax({
    url: config.apiOrigin + '/favorite_movies/' + store.favorite_movie.id,
    method: 'PATCH',
    data: {
      'title': {
        'genre': {
          'comment': {
          }
        }
      },
      headers: {
        Authorization: 'Token token=' + store.user.token
      }
    }
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

module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut,
  createList,
  updateList,
  index
}
