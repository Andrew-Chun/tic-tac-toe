'use strict'

const userEvents = require('./events.js')

$(() => {
  $('#sign-up').on('submit', userEvents.onSignUp)
})
