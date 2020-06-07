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

// const updateGame = function (event) {
//   return $.ajax({
//     method: 'PATCH',
//     url: config.apiUrl + '/games'
//   })
// }

module.exports = {
  newGame
}
