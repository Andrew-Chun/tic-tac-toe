const api = require('./api.js')
const ui = require('./ui.js')
const store = require('./../store.js')

const onNewGame = event => {
  event.preventDefault()

  store.trackBoard = ['', '', '', '', '', '', '', '', '']
  store.currentPlayer = 'x'

  api.newGame()
    .then(ui.newGameSuccess)
    .catch(ui.newGameFailure)
}

const onValidMove = event => {
  event.preventDefault()

  if (event.target.innerHTML.length === 0 && !store.game.over) {
    store.currentIndex = event.target.id
    store.trackBoard[store.currentIndex] = store.currentPlayer

    api.updateGame()
      .then(ui.updateGameSuccess)
      .catch()
  } else if (!store.game.over) {
    $('#game-message').text('Invalid move!').removeClass().addClass('failure')
  }
}

const onGetCompletedGames = event => {
  event.preventDefault()

  api.getCompletedGames()
    .then(ui.getCompletedGamesSuccess)
    .catch()
}

const onGetIncompletedGames = event => {
  event.preventDefault()

  api.getIncompletedGames()
    .then(ui.getIncompletedGamesSuccess)
    .catch()
}

module.exports = {
  onNewGame,
  onValidMove,
  onGetCompletedGames,
  onGetIncompletedGames
}
