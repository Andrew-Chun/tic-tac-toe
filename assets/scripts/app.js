'use strict'

const authEvents = require('./auth/events.js')
const gameEvents = require('./games/events.js')

$(() => {
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#sign-out').on('click', authEvents.onSignOut)
  $('#changePassword').on('submit', authEvents.onChangePassword)

  $('#new-game').on('click', gameEvents.onNewGame)
  $('#1').on('click', gameEvents)
})
