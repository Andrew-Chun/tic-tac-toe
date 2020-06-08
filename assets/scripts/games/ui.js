const store = require('./../store.js')
const isWinner = require('./isWinner.js')

const newGameSuccess = function (responseData) {
  console.log(responseData)
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

const updateGameSuccess = function (responseData) {
  console.log(responseData)
  console.log(store)
  $('#' + store.currentIndex).text(store.currentPlayer).show()
  store.game = responseData.game

  console.log(store.game.over)
  if (isWinner()) {
    console.log(isWinner())
    console.log(store.game.over)
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

  console.log(store)
}

const getGamesSuccess = function (responseData) {
  $('#game-message').hide()
  $('#game-history').text(`${responseData.games.length} games Won!`).removeClass().addClass('success').show()
  console.log(responseData)
}

module.exports = {
  newGameSuccess,
  updateGameSuccess,
  getGamesSuccess
}
