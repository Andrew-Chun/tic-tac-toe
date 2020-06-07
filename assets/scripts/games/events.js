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

  if (event.target.innerHTML.length === 0) {
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

const isWinner = function () {
  const board = store.game.cells

  if (board[0] === 'x' && board[1] === 'x' && board[2] === 'x') {
    return true
  } else if (board[3] === 'x' && board[4] === 'x' && board[5] === 'x') {
    return true
  } else if (board[6] === 'x' && board[7] === 'x' && board[8] === 'x') {
    return true
  } else if (board[0] === 'x' && board[3] === 'x' && board[6] === 'x') {
    return true
  } else if (board[1] === 'x' && board[4] === 'x' && board[7] === 'x') {
    return true
  } else if (board[2] === 'x' && board[5] === 'x' && board[8] === 'x') {
    return true
  } else if (board[0] === 'x' && board[4] === 'x' && board[8] === 'x') {
    return true
  } else if (board[2] === 'x' && board[4] === 'x' && board[6] === 'x') {
    return true
  } else if (board[0] === 'o' && board[1] === 'o' && board[2] === 'o') {
    return true
  } else if (board[3] === 'o' && board[4] === 'o' && board[5] === 'o') {
    return true
  } else if (board[6] === 'o' && board[7] === 'o' && board[8] === 'o') {
    return true
  } else if (board[0] === 'o' && board[3] === 'o' && board[6] === 'o') {
    return true
  } else if (board[1] === 'o' && board[4] === 'o' && board[7] === 'o') {
    return true
  } else if (board[2] === 'o' && board[5] === 'o' && board[8] === 'o') {
    return true
  } else if (board[0] === 'o' && board[4] === 'o' && board[8] === 'o') {
    return true
  } else if (board[2] === 'o' && board[4] === 'o' && board[6] === 'o') {
    return true
  } else {
    return false
  }
}

module.exports = {
  onNewGame,
  onValidMove
}
