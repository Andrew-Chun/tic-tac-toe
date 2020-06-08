const api = require('./api.js')
const ui = require('./ui.js')
const store = require('./../store.js')

const onNewGame = function (event) {
  event.preventDefault()

  api.newGame()
    .then(ui.newGameSuccess)
    .catch()
}

const onValidMove = function (event) {
  event.preventDefault()

  store.currentIndex = event.target.id

  if (event.target.innerHTML.length === 0 && !store.game.over) {
    api.updateGame()
      .then(ui.updateGameSuccess)
      .catch()
  } else {
    return $('#game-message').text('Invalid move!').removeClass().addClass('failure')
  }

  if (store.currentPlayer === 'x') {
    $('#game-message').text("Player X's turn.").removeClass().addClass('success')
    store.currentPlayer = 'o'
  } else {
    $('#game-message').text("Player O's turn.").removeClass().addClass('success')
    store.currentPlayer = 'x'
  }
}

module.exports = {
  onNewGame,
  onValidMove
}
