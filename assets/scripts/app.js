'use strict'

const authEvents = require('./auth/events.js')
const gameEvents = require('./games/events.js')

$(() => {
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#sign-out').on('click', authEvents.onSignOut)
  $('#changePassword').on('submit', authEvents.onChangePassword)

  $('.container').hide()
  $('#new-game').on('click', gameEvents.onNewGame)
  $('#0').on('click', gameEvents.validMove)
  $('#1').on('click', gameEvents.validMove)
  $('#2').on('click', gameEvents.validMove)
  $('#3').on('click', gameEvents.validMove)
  $('#4').on('click', gameEvents.validMove)
  $('#5').on('click', gameEvents.validMove)
  $('#6').on('click', gameEvents.validMove)
  $('#7').on('click', gameEvents.validMove)
  $('#8').on('click', gameEvents.validMove)
})
