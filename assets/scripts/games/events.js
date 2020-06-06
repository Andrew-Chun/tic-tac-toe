const api = require('./api.js')
const ui = require('./ui.js')

const onNewGame = function (event) {
  event.preventDefault()

  api.newGame()
    .then(ui.newGameSuccess)
    .catch(ui.newGameFailure)
}

const choice =

module.exports = {
  onNewGame
}
