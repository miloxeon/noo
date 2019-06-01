import React from 'react'
import { connect, prevent } from 'lib'
import { keccak512 as hash } from 'js-sha3'

import Input from 'ui/input'
import Button from 'ui/button'
import Center from 'ui/center'
import Faq from 'ui/faq'
import Pad from 'ui/pad'

const SecretInput = props => (
  <Pad padding='64px 0 0 0'>
    <h2>The secret</h2>
    <p>
      The secret will be your master password. If you know it, you can access your passwords on any other device.
    </p>
    <p>
      If you don't, there's no way to acquire it again. It can't be extracted from any of your passwords either.
    </p>
    <p>
      This is the first and the last time you see your secret there. Once you enter it, there'll be no way back.
    </p>
    <form onSubmit={ props.commit }>
      <Input
        autoFocus
        required
        type='password'
        placeholder='keyboardcat'
        value={ props.secret }
        onChange={ props.edit }
      />
      <Center>
        <Button>Submit secret</Button>
      </Center>
    </form>
    <Faq style={{ marginTop: '100px' }} />
  </Pad>
)

SecretInput.displayName = 'SecretInput'

export default connect(
  state => ({
    secret: state.ui.secret
  }),
  dispatch => ({
    edit: e => dispatch('editSecret', e.target.value),
    commit: e => prevent(e, () => dispatch('commitSecret'))
  })
)(SecretInput)

export const actions = {
  editSecret: (state, secret) => ({ ...state,
    ui: { ...state.ui, secret }
  }),
  commitSecret: state => ({ ...state,
    secret: hash(state.ui.secret),
    ui: { ...state.ui, secret: '' }
  })
}
