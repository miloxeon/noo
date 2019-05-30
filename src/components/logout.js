import React from 'react'
import { connect } from 'lib'
import initialState from 'store/initialState'

import Button from 'ui/button'

const Logout = props => !props.domainEditingActive && (
  <Button type='button' onClick={ props.onClick }>
    Logout...
  </Button>
)

Logout.displayName = 'Logout'

export default connect(
  state => ({
    domainEditingActive: state.domainEditingActive
  }),
  dispatch => ({
    onClick: () => dispatch('logout')
  })
)(Logout)

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
