const newGameSuccess = function (responseData) {
  console.log(responseData)
  $('.container').show()
}

const newGameFailure = function () {
  console.log('New game failed to load...')
}

module.exports = {
  newGameSuccess,
  newGameFailure
}
