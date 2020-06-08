const store = require('./../store.js')
const isWinner = require('./isWinner.js')

const newGameSuccess = function (responseData) {
  console.log(responseData)
  $('.container').show()
  $('#game-message').text("Player X's turn.")
  store.game = responseData.game
  console.log(store)
}

const updateGameSuccess = function (responseData) {
  console.log('Valid move!')
  console.log(responseData)
  store.game = responseData.game
  console.log(isWinner())
  if (store.game.over) {
    $('#game-message').text(`Player ${store.currentPlayer.toUpperCase()} Wins!`)
  } else if (store.game.cells.join('').length === 9) {
    $('game-message').text("It's a Draw!")
    store.game.over = true
  }
  $('#' + store.currentIndex).text(store.currentPlayer)
  console.log(store)
}

module.exports = {
  newGameSuccess,
  updateGameSuccess
}
