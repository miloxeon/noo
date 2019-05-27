import React from 'react'
import { connect } from 'react-redux'

import Input from 'ui/input'

const SecretInput = props => (
  <Input
    type='password'
    placeholder='keyboardcat'
    { ...props }
  />
)

SecretInput.displayName = 'SecretInput'

export default connect(
  state => ({
    value: state.ui.secret
  }),
  dispatch => ({
    onChange: e => dispatch({
      type: 'editSecret', payload: e.target.value
    })
  })
)(SecretInput)

export const actions = {
  editSecret: (state, secret) => {
    return { ...state, ui: { ...state.ui, secret }}
  }
}
