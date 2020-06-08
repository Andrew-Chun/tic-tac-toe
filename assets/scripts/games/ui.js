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
  $('#' + store.currentIndex).text(store.currentPlayer)
  store.game = responseData.game
  console.log(isWinner())
  console.log(store.game.cells.join('').length)
  if (store.game.over) {
    $('#game-message').text(`Player ${store.currentPlayer.toUpperCase()} Wins!`)
  }
  if (store.game.cells.join('').length === 9) {
    store.game.over = true
    $('#game-message').text("It's a Draw!")
  }
  console.log(store)
}

const getGamesSuccess = function (responseData) {
  console.log(responseData)
  console.log(responseData.games)
  // responseData.games.forEach(game => {
  //   $('#game-history').text(`${game}`)
  // })
}

module.exports = {
  newGameSuccess,
  updateGameSuccess,
  getGamesSuccess
}
