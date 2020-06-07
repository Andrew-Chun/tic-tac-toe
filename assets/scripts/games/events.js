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
  console.log(event.target.text)
  console.log(event.target.data)
  event.preventDefault()

  if (event.target.innerHTML.length === 0) {
    console.log('No value present or Valid Move!')
    // api.updateGame()
  } else {
    console.log('Invalid move!')
  }
}

module.exports = {
  onNewGame,
  onValidMove
}
