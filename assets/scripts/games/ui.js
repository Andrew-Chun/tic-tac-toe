const store = require('./../store.js')
const isWinner = require('./isWinner.js')

const newGameSuccess = function (responseData) {
  $('#message').hide()
  $('#game-message').text('New game successfully created!').removeClass().addClass('success').show()
  $('.container').show()
  $('#0').html('')
  $('#1').html('')
  $('#2').html('')
  $('#3').html('')
  $('#4').html('')
  $('#5').html('')
  $('#6').html('')
  $('#7').html('')
  $('#8').html('')
  store.game = responseData.game
}

const newGameFailure = function () {
  $('#message').hide()
  $('#game-message').text('Failed to create new game.').removeClass().addClass('failure').show()
}

const updateGameSuccess = function (responseData) {
  $('#' + store.currentIndex).text(store.currentPlayer).show()
  store.game = responseData.game

  if (isWinner()) {
    return $('#game-message').text(`Player ${store.currentPlayer.toUpperCase()} Wins!`).removeClass().addClass('success')
  } else if (store.game.cells.join('').length === 9) {
    store.game.over = true
    return $('#game-message').text("It's a Draw!").removeClass().addClass('success')
  }

  if (store.currentPlayer === 'x' && !store.game.over) {
    $('#game-message').text("Player O's turn").removeClass().addClass('success')
    store.currentPlayer = 'o'
  } else if (store.currentPlayer === 'o' && !store.game.over) {
    $('#game-message').text("Player X's turn").removeClass().addClass('success')
    store.currentPlayer = 'x'
  }
}

const getGamesSuccess = function (responseData) {
  $('#message').hide()
  let wins = 0
  let draws = 0
  responseData.games.forEach(game => {
    store.trackBoard = game.cells
    if (isWinner()) {
      wins++
    } else {
      draws++
    }
  })
  $('#game-message').text(`You've won ${wins} games with ${draws} draws`).removeClass().addClass('success').show()
}

module.exports = {
  newGameSuccess,
  newGameFailure,
  updateGameSuccess,
  getGamesSuccess
}
