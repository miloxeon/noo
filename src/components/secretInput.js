import React from 'react'
import { connect } from 'react-redux'

import Pad from 'ui/pad'
import Input from 'ui/input'
import Button from 'ui/button'

const SecretInput = props => (
  <Pad padding='32px'>
    <h2>
      The secret
    </h2>
    <p>
      Once you enter this, there'll be no way back.
    </p>
    <form>
      <Input
        required
        type='password'
        placeholder='keyboardcat'
        { ...props }
      />
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        margin: '20px 0'
      }}>
        <Button>
          Submit
        </Button>
      </div>
    </form>
  </Pad>

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
