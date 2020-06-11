'use strict'

const authEvents = require('./auth/events.js')
const gameEvents = require('./games/events.js')

$(() => {
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#sign-out').on('click', authEvents.onSignOut)
  $('#change-pw').on('submit', authEvents.onChangePassword)

  $('.container').hide()
  $('#new-game').hide()
  $('#user-actions').hide()
  $('#incomplete-game-list').hide()

  $('#new-game').on('click', gameEvents.onNewGame)
  $('#get-completed-games').on('click', gameEvents.onGetCompletedGames)
  $('#get-incompleted-games').on('click', gameEvents.onGetIncompleteGames)

  $('#0').on('click', gameEvents.onValidMove)
  $('#1').on('click', gameEvents.onValidMove)
  $('#2').on('click', gameEvents.onValidMove)
  $('#3').on('click', gameEvents.onValidMove)
  $('#4').on('click', gameEvents.onValidMove)
  $('#5').on('click', gameEvents.onValidMove)
  $('#6').on('click', gameEvents.onValidMove)
  $('#7').on('click', gameEvents.onValidMove)
  $('#8').on('click', gameEvents.onValidMove)

  $('ul').on('click', 'li', gameEvents.onPickIncompleteGame)
})
