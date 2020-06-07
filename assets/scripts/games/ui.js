const store = require('./../store.js')

const newGameSuccess = function (responseData) {
  console.log(responseData)
  $('.container').show()
  store.game = responseData.game
  console.log(store)
}

const newGameFailure = function () {
  console.log('New game failed to load...')
}

const updateGameSuccess = function (responseData) {
  console.log('Valid move!')
  console.log(responseData)
  $('#' + store.currentIndex).text(store.currentPlayer)
  store.game = responseData.game
  console.log(store)
}

const updateGameFailure = function () {
  // $('')
  console.log('Invalid move!')
}

module.exports = {
  newGameSuccess,
  newGameFailure,
  updateGameSuccess,
  updateGameFailure
}
