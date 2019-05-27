import React from 'react'
import Logout from 'components/logout'
import SecretInput from 'components/secretInput'

const App = props => (
  <div>
    <SecretInput />
    <Logout />
  </div>
)

App.displayName = 'App'

export default App

export const actions = {
  foo: (state, payload) => state
}
