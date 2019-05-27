import React from 'react'
import Logout from 'components/logout'

const App = props => (
  <div>
    <Logout />
  </div>
)

App.displayName = 'App'

export default App

export const actions = {
  foo: (state, payload) => state
}
