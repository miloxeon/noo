import React from 'react'
import { connect } from 'react-redux'
import initialState from 'store/initialState'

import Button from 'ui/button'

const Logout = props => (
  <Button { ...props }>
    Logout
  </Button>
)

Logout.displayName = 'Logout'

export default connect(null, dispatch => ({
  onClick: () => dispatch({ type: 'logout' })
}))(Logout)

export const actions = {
  logout: () => {
    localStorage.removeItem('noo')
    return initialState
  }
}
