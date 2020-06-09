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
  $('.forms').hide()
  $('#message').text(`${responseData.user.email} signed in successfully!`).removeClass().addClass('success').show()
  $('#new-game').show()
  $('.dropdown-toggle').text(responseData.user.email)
  $('#user-actions').show()
  store.user = responseData.user
}

const signInFailure = () => {
  $('#message').text('Sign in failure.').removeClass().addClass('failure')
}

const signOutSuccess = () => {
  $('form').trigger('reset')
  $('.container').hide()
  $('#new-game').hide()
  $('#user-actions').hide()
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
  $('#collapse').hide()
  $('#game-message').hide()
}

const changePasswordFailure = () => {
  $('form').trigger('reset')
  $('#message').text('Password change failure.').removeClass().addClass('failure').show()
  $('#game-message').hide()
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
