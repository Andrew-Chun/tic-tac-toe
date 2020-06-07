const api = require('./api.js')
const ui = require('./ui.js')

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
  event.preventDefault()

  if (event.target.innerHTML.length === 0) {
    console.log('No value present')
  } else {
    console.log('Invalid move!')
  }
}

module.exports = {
  onNewGame,
  onValidMove
}
