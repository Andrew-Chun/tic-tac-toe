const store = require('./../store.js')
const isWinner = require('./isWinner.js')

const newGameSuccess = function (responseData) {
  $('.container').show()
  $('#game-history').hide()
  $('#message').hide()
  $('#game-message').text('New game successfully created!').removeClass().addClass('success').show()
  $('#0').html('')
  $('#1').html('')
  $('#2').html('')
  $('#3').html('')
  $('#4').html('')
  $('#5').html('')
  $('#6').html('')
  $('#7').html('')
  $('#8').html('')
  store.game = responseData.game
}

const newGameFailure = function () {
  $('#message').hide()
  $('#game-history').hide()
  $('#game-message').text('Failed to create new game.').removeClass().addClass('failure').show()
}

const updateGameSuccess = function (responseData) {
  $('#' + store.currentIndex).text(store.currentPlayer).show()
  store.game = responseData.game

  if (isWinner()) {
    return $('#game-message').text(`Player ${store.currentPlayer.toUpperCase()} Wins!`)
  } else if (store.game.cells.join('').length === 9) {
    store.game.over = true
    return $('#game-message').text("It's a Draw!")
  }

  if (store.currentPlayer === 'x' && !store.game.over) {
    $('#game-message').text("Player O's turn.").removeClass().addClass('success')
    store.currentPlayer = 'o'
  } else if (store.currentPlayer === 'o' && !store.game.over) {
    $('#game-message').text("Player X's turn.").removeClass().addClass('success')
    store.currentPlayer = 'x'
  }
}

const getGamesSuccess = function (responseData) {
  $('#message').hide()
  $('#game-message').text(`You've won ${responseData.games.length} total games!`).removeClass().addClass('success').show()
}

module.exports = {
  newGameSuccess,
  newGameFailure,
  updateGameSuccess,
  getGamesSuccess
}
