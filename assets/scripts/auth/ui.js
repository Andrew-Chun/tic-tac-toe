const store = require('./../store.js')

const signUpSuccess = responseData => {
  $('form').trigger('reset')
  $('#message').text(`Signed up successfully!`).removeClass().addClass('success')
}

const signUpFailure = function () {
  $('#message').text('Sign up failure.').removeClass().addClass('failure')
}

const signInSuccess = responseData => {
  $('form').trigger('reset')
  $('#message').text(`Signed In successfully!`).removeClass().addClass('success').show()
  store.user = responseData.user
  $('.forms').hide()
  $('#toggleChangePassword').show()
  $('#changePassword').show()
  $('#sign-out').show()
  $('#new-game').show()
  $('#get-games').show()
}

const signInFailure = () => {
  $('#message').text('Sign in failure.').removeClass().addClass('failure')
}

const signOutSuccess = () => {
  $('form').trigger('reset')
  $('#sign-out').hide()
  $('#toggleChangePassword').hide()
  $('#changePassword').hide()
  $('.container').hide()
  $('#new-game').hide()
  $('#get-games').hide()
  $('#game-message').hide()
  $('.forms').show()
  $('#message').text(`Signed Out successfully!`).removeClass().addClass('success').show()
}

const signOutFailure = () => {
  $('#message').text('Sign Out failure.').removeClass().addClass('failure').show()
}

const changePasswordSuccess = () => {
  $('form').trigger('reset')
  $('#message').text(`Password changed successfully!`).removeClass().addClass('success').show()
}

const changePasswordFailure = () => {
  $('#message').text('Password change failure.').removeClass().addClass('failure').show()
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  changePasswordSuccess,
  changePasswordFailure
}
