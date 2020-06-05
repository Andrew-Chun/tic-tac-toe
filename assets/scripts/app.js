'use strict'

const userEvents = require('./user/events.js')

$(() => {
  $('#sign-up').on('submit', userEvents.onSignUp)
  $('#sign-in').on('submit', userEvents.onSignIn)
  $('#sign-out').on('click', userEvents.onSignOut)
  $('#changePassword').on('submit', userEvents.onChangePassword)
})
