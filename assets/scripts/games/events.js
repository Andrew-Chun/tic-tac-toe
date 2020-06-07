const api = require('./api.js')
const ui = require('./ui.js')
// const store = require('./../store.js')

// const isOver = function () {
//   if (store.games.cells === ['', '', '', '', '', '', '', '', '']) {
//     return true
//   } else {
//     return false
//   }
// }

const onNewGame = function (event) {
  event.preventDefault()

  api.newGame()
    .then(ui.newGameSuccess)
    .catch(ui.newGameFailure)
}

const onValidMove = function (event) {
  console.log('clicked!')
  console.log(event.target)
  console.log(event.target.innerHTML)
  console.log(event.target.id)
  event.preventDefault()

  if (event.target.innerHTML.length === 0) {
    console.log('No value present or Valid Move!')
    api.updateGame()
      .then(ui.updateGameSuccess)
      .catch(ui.updateGameFailure)
  }
}

module.exports = {
  onNewGame,
  onValidMove
}
