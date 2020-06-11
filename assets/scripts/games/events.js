const api = require('./api.js')
const ui = require('./ui.js')
const store = require('./../store.js')

const onNewGame = event => {
  api.newGame()
    .then(ui.newGameSuccess)
    .catch(ui.newGameFailure)
}

const onValidMove = event => {
  if (event.target.innerHTML.length === 0 && !store.game.over) {
    store.currentIndex = event.target.id
    store.trackBoard[store.currentIndex] = store.currentPlayer

    api.updateGame()
      .then(ui.updateGameSuccess)
      .catch(ui.updateGameFailure)
  } else if (!store.game.over) {
    $('#game-message').text('Invalid move!').removeClass().addClass('failure')
  }
}

const onGetCompletedGames = event => {
  api.getCompletedGames()
    .then(ui.getCompletedGamesSuccess)
    .catch(ui.getCompletedGamesFailure)
}

const onGetIncompleteGames = event => {
  api.getIncompleteGames()
    .then(ui.getIncompleteGamesSuccess)
    .catch(ui.getIncompleteGamesFailure)
}

const onPickIncompleteGame = event => {
  const gameId = event.currentTarget.getAttribute('id')

  api.getGame(gameId)
    .then(ui.getGameSuccess)
    .catch(ui.getGameFailure)
}

module.exports = {
  onNewGame,
  onValidMove,
  onGetCompletedGames,
  onGetIncompleteGames,
  onPickIncompleteGame
}
