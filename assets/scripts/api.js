const config = require('./config.js')

const signUp = function (data) {
  console.log(data)
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/sign-up',
    data
  })
}

module.exports = {
  signUp
}
