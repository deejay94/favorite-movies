'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const authEvents = require('./auth/events')
const faveMovieEvents = require('./fave_movie/events')

$(() => {
  setAPIOrigin(location, config)
})

// On document ready

$(() => {
  authEvents.addHandlers()
  faveMovieEvents.addHandlers()
})
