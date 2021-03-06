const api = require('./api.js')
const ui = require('./ui.js')
const getFormData = require('./../../../lib/get-form-fields.js')

const onSignUp = event => {
  event.preventDefault()

  const data = getFormData(event.target)

  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = event => {
  event.preventDefault()

  const data = getFormData(event.target)

  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onSignOut = event => {
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const onChangePassword = event => {
  event.preventDefault()

  const data = getFormData(event.target)

  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

module.exports = {
  onSignUp,
  onSignIn,
  onSignOut,
  onChangePassword
}
