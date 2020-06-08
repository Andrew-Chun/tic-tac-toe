const config = require('./../config.js')
const store = require('./../store.js')
const isWinner = require('./isWinner.js')

const newGame = function () {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/games',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {}
  })
}

const updateGame = function () {
  console.log(isWinner() || store.trackBoard.join('').length === 9)
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/games/' + store.game._id,
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      game: {
        cell: {
          index: store.currentIndex,
          value: store.currentPlayer
        },
        over: isWinner() || store.trackBoard.join('').length === 9
      }
    }
  })
}

const getGames = function () {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/games',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  newGame,
  updateGame,
  getGames
}
