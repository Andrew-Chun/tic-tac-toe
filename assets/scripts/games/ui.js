const store = require('./../store.js')
const isWinner = require('./isWinner.js')

const newGameSuccess = responseData => {
  $('#message').hide()
  $('#incomplete-game-list').hide()
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
  store.currentPlayer = 'x'
  store.trackBoard = ['', '', '', '', '', '', '', '', '']
  store.game = responseData.game
}

const newGameFailure = () => {
  $('#message').hide()
  $('#game-message').text('Failed to create new game.').removeClass().addClass('failure').show()
}

const updateGameSuccess = responseData => {
  $('#' + store.currentIndex).text(store.currentPlayer).show()
  store.game = responseData.game

  if (isWinner()) {
    store.game.over = true
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

const updateGameFailure = () => {
  $('#message').hide()
  $('#game-message').text('Invalid move! Please try again').removeClass().addClass('failure')
}

const getCompletedGamesSuccess = responseData => {
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

const getCompletedGamesFailure = () => {
  $('#message').hide()
  $('#game-message').text('Unable to get player stats.').removeClass().addClass('failure').show()
}

const getIncompleteGamesSuccess = responseData => {
  $('#game-message').text('Scroll below to choose your unfinished game:').removeClass().addClass('success').show()
  $('#message').hide()
  $('.container').hide()
  let incompleteGamesHtml = ''
  responseData.games.forEach(game => {
    store.trackBoard = game.cells
    if (!isWinner() && store.trackBoard.join('').length < 9) {
      const oneGame = (`
        <li class="list-group-item" id="${game._id}" data-cells='[${game.cells}]'>
          <div class="container" id="game-board2">
              <div class="row tic-tac-toe-board2">
                <div class="col-4 box-0" id="0">${game.cells[0]}</div>
                <div class="col-4 box-1" id="1">${game.cells[1]}</div>
                <div class="col-4 box-2" id="2">${game.cells[2]}</div>
                <div class="col-4 box-3" id="3">${game.cells[3]}</div>
                <div class="col-4 box-4" id="4">${game.cells[4]}</div>
                <div class="col-4 box-5" id="5">${game.cells[5]}</div>
                <div class="col-4 box-6" id="6">${game.cells[6]}</div>
                <div class="col-4 box-7" id="7">${game.cells[7]}</div>
                <div class="col-4 box-8" id="8">${game.cells[8]}</div>
              </div>
          </div>
        </li>
      `)
      incompleteGamesHtml += oneGame
    }
  })
  $('#incomplete-game-list').html(incompleteGamesHtml).show()
}

const getIncompleteGamesFailure = () => {
  $('#message').hide()
  $('#game-message').text('Failed to retrieve incomplete games.').removeClass().addClass('failure').show()
}

const getGameSuccess = (responseData) => {
  store.game = responseData.game[0]
  store.trackBoard = responseData.game[0].cells

  let numX = 0
  let numO = 0
  for (let i = 0; i < store.trackBoard.length; i++) {
    $('#' + i).html(store.trackBoard[i])
    if (store.trackBoard[i] === 'x') {
      numX++
    } else if (store.trackBoard[i] === 'o') {
      numO++
    }
  }
  numX > numO ? store.currentPlayer = 'o' : store.currentPlayer = 'x'

  $('#game-message').text(`Player ${store.currentPlayer.toUpperCase()}'s turn`).removeClass().addClass('success').show()
  $('#message').hide()
  $('#incomplete-game-list').hide()
  $('.container').show()
}

const getGameFailure = () => {
  $('#message').hide()
  $('#game-message').text(`Unable to retrieve game.`).removeClass().addClass('failure').show()
}

module.exports = {
  newGameSuccess,
  newGameFailure,
  updateGameSuccess,
  updateGameFailure,
  getCompletedGamesSuccess,
  getCompletedGamesFailure,
  getIncompleteGamesSuccess,
  getIncompleteGamesFailure,
  getGameSuccess,
  getGameFailure
}
