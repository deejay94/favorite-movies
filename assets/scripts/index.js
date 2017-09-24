'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const authEvents = require('./books/events')

$(() => {
  setAPIOrigin(location, config)
})

// On document ready

$(() => {
  authEvents.addHandlers()
})
