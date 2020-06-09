'use strict'

const authEvents = require('./auth/events.js')
const gameEvents = require('./games/events.js')

$(() => {
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#sign-out').on('click', authEvents.onSignOut)
  $('#changePassword').on('submit', authEvents.onChangePassword)

  // $('#sign-out').hide()
  // $('#toggleChangePassword').hide()
  // $('#changePassword').hide()
  $('.container').hide()
  $('#new-game').hide()
  // $('#get-games').hide()
  $('#dropdownMenu2').hide()

  $('#new-game').on('click', gameEvents.onNewGame)
  $('#get-games').on('click', gameEvents.onGetGames)

  $('#0').on('click', gameEvents.onValidMove)
  $('#1').on('click', gameEvents.onValidMove)
  $('#2').on('click', gameEvents.onValidMove)
  $('#3').on('click', gameEvents.onValidMove)
  $('#4').on('click', gameEvents.onValidMove)
  $('#5').on('click', gameEvents.onValidMove)
  $('#6').on('click', gameEvents.onValidMove)
  $('#7').on('click', gameEvents.onValidMove)
  $('#8').on('click', gameEvents.onValidMove)
})
