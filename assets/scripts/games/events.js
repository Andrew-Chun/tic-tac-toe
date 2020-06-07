const api = require('./api.js')
const ui = require('./ui.js')
const store = require('./../store.js')

// const isOver = function () {
//   if (store.games.cells === ['', '', '', '', '', '', '', '', '']) {
//     return true
//   } else {
//     return false
//   }
// }

const onNewGame = function (event) {
  event.preventDefault()

  api.newGame()
    .then(ui.newGameSuccess)
    .catch(ui.newGameFailure)
}

const onValidMove = function (event) {
  event.preventDefault()

  store.currentIndex = event.target.id

  if (event.target.innerHTML.length === 0) {
    api.updateGame()
      .then(ui.updateGameSuccess)
      .catch(ui.updateGameFailure)
  }

  if (store.currentPlayer === 'x') {
    store.currentPlayer = 'o'
  } else {
    store.currentPlayer = 'x'
  }
}

module.exports = {
  onNewGame,
  onValidMove
}
