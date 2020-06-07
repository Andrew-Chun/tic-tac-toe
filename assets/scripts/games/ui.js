const store = require('./../store.js')

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
  console.log(store)
}

module.exports = {
  newGameSuccess,
  updateGameSuccess
}
