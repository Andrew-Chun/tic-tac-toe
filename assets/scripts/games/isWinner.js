const store = require('./../store.js')

const isWinner = function () {
  const board = store.game.cells

  if (board[0] === 'x' && board[1] === 'x' && board[2] === 'x') {
    store.game.over = true
    return true
  } else if (board[3] === 'x' && board[4] === 'x' && board[5] === 'x') {
    store.game.over = true
    return true
  } else if (board[6] === 'x' && board[7] === 'x' && board[8] === 'x') {
    store.game.over = true
    return true
  } else if (board[0] === 'x' && board[3] === 'x' && board[6] === 'x') {
    store.game.over = true
    return true
  } else if (board[1] === 'x' && board[4] === 'x' && board[7] === 'x') {
    store.game.over = true
    return true
  } else if (board[2] === 'x' && board[5] === 'x' && board[8] === 'x') {
    store.game.over = true
    return true
  } else if (board[0] === 'x' && board[4] === 'x' && board[8] === 'x') {
    store.game.over = true
    return true
  } else if (board[2] === 'x' && board[4] === 'x' && board[6] === 'x') {
    store.game.over = true
    return true
  } else if (board[0] === 'o' && board[1] === 'o' && board[2] === 'o') {
    store.game.over = true
    return true
  } else if (board[3] === 'o' && board[4] === 'o' && board[5] === 'o') {
    store.game.over = true
    return true
  } else if (board[6] === 'o' && board[7] === 'o' && board[8] === 'o') {
    store.game.over = true
    return true
  } else if (board[0] === 'o' && board[3] === 'o' && board[6] === 'o') {
    store.game.over = true
    return true
  } else if (board[1] === 'o' && board[4] === 'o' && board[7] === 'o') {
    store.game.over = true
    return true
  } else if (board[2] === 'o' && board[5] === 'o' && board[8] === 'o') {
    store.game.over = true
    return true
  } else if (board[0] === 'o' && board[4] === 'o' && board[8] === 'o') {
    store.game.over = true
    return true
  } else if (board[2] === 'o' && board[4] === 'o' && board[6] === 'o') {
    store.game.over = true
    return true
  } else {
    return false
  }
}

module.exports = isWinner
