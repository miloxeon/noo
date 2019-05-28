import React from 'react'
import { connect } from 'lib'
import initialState from 'store/initialState'

import Button from 'ui/button'

const Logout = props => (
  <Button type='button' { ...props }>
    Logout...
  </Button>
)

Logout.displayName = 'Logout'

export default connect(null, dispatch => ({
  onClick: () => dispatch('logout')
}))(Logout)

export const actions = {
  logout: state => {
    if (window.confirm('Are you sure want to quit? You will lose all your saved passwords.')) {
      localStorage.removeItem('noo')
      return initialState
    } else {
      return state
    }
  }
}
