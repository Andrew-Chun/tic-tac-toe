const store = require('./../store.js')
const isWinner = require('./isWinner.js')

const newGameSuccess = function (responseData) {
  // remove X's and O'x from the board
  console.log(responseData)
  $('.container').show()
  $('#game-message').text("Player X's turn.")
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
  console.log(store)
}

const updateGameSuccess = function (responseData) {
  console.log('Valid move!')
  console.log(responseData)
  $('#' + store.currentIndex).text(store.currentPlayer)
  store.game = responseData.game
  console.log(isWinner())
  console.log(store.game.cells.join('').length)
  if (isWinner()) {
    $('#game-message').text(`Player ${store.currentPlayer.toUpperCase()} Wins!`)
  } else if (store.game.cells.join('').length === 9) {
    store.game.over = true
    $('#game-message').text("It's a Draw!")
  }
  console.log(store)
}

const getGamesSuccess = function (responseData) {
  console.log(responseData)
  console.log(responseData.games)
  $('#game-history').text(`${responseData.games.length} games played!`)
  // add length of responseData.games.length to the screen
  // Total number of games played
}

module.exports = {
  newGameSuccess,
  updateGameSuccess,
  getGamesSuccess
}
