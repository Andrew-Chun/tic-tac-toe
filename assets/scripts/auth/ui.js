const store = require('./../store.js')

const signUpSuccess = function (responseData) {
  $('form').trigger('reset')
  $('#message').text(`Signed up successfully!`).removeClass().addClass('success')
}

const signUpFailure = function () {
  $('#message').text('Sign up failure.').removeClass().addClass('failure')
}

const signInSuccess = function (responseData) {
  $('form').trigger('reset')
  $('#message').text(`Signed In successfully!`).removeClass().addClass('success')
  store.user = responseData.user
}

const signInFailure = function () {
  $('#message').text('Sign in failure.').removeClass().addClass('failure')
}

const signOutSuccess = function () {
  $('form').trigger('reset')
  $('#message').text(`Signed Out successfully!`).removeClass().addClass('success')
}

const signOutFailure = function () {
  $('#message').text('Sign Out failure.').removeClass().addClass('failure')
}

const changePasswordSuccess = function () {
  $('form').trigger('reset')
  $('#message').text(`Password changed successfully!`).removeClass().addClass('success')
}

const changePasswordFailure = function () {
  $('#message').text('Password change failure.').removeClass().addClass('failure')
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
