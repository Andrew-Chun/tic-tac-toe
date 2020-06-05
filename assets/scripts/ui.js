const signUpSuccess = function (data) {
  $('form').trigger('reset')
  $('#message').text(`Signed up successfully!`).removeClass().addClass('success')
  console.log('data is:', data)
}

const signUpFailure = function () {
  $('#message').text('Sign up failure.').removeClass().addClass('failure')
}

module.exports = {
  signUpSuccess,
  signUpFailure
}
