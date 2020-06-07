const config = require('./../config.js')
const store = require('./../store.js')

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
        over: false
      }
    }
  })
}

module.exports = {
  newGame,
  updateGame
}
