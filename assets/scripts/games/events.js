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
      .catch(ui.updateGameFailure)
  } else if (!store.game.over) {
    $('#game-message').text('Invalid move!').removeClass().addClass('failure')
  }
}

const onGetCompletedGames = event => {
  event.preventDefault()

  api.getCompletedGames()
    .then(ui.getCompletedGamesSuccess)
    .catch(ui.getCompletedGamesFailure)
}

const onGetIncompleteGames = event => {
  event.preventDefault()

  api.getIncompleteGames()
    .then(ui.getIncompleteGamesSuccess)
    .catch(ui.getIncompleteGamesFailure)
}

const onPickIncompleteGame = event => {
  event.preventDefault()
  // Get game id, store it, and add cells to the page
  console.log(event)
  console.log(event.currentTarget)
  console.log(event.currentTarget.getAttribute('id'))
  const gameId = event.currentTarget.getAttribute('id')
  console.log(event.currentTarget.getAttribute('data-cells'))

  console.log(event.currentTarget.childNodes[1])
  $('#incomplete-game-list').hide()

  api.getGame(gameId)
    .then(ui.getGameSuccess)
    .catch(ui.getGameFailure)
  // $('#game-board').html(`${event.currentTarget.childNodes[1]}`).show()
}

module.exports = {
  onNewGame,
  onValidMove,
  onGetCompletedGames,
  onGetIncompleteGames,
  onPickIncompleteGame
}
