import React, { Fragment } from 'react'
import { connect, prevent } from 'lib'

import Input from 'ui/input'
import Button from 'ui/button'
import Center from 'ui/center'
import Faq from 'ui/faq'

const SecretInput = props => (
  <Fragment>
    <h2>The secret</h2>
    <p>
      Once you enter this, there'll be no way back.
    </p>
    <p>
      There is no way to restore the secret either.
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
        <Button>Submit</Button>
      </Center>
    </form>
    <Faq />
  </Fragment>

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
    secret: state.ui.secret,
    ui: { ...state.ui, secret: '' }
  })
}
