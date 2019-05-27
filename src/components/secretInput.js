import React, { Fragment } from 'react'
import { connect } from 'react-redux'

import Input from 'ui/input'
import Button from 'ui/button'
import Center from 'ui/center'

const SecretInput = props => (
  <Fragment>
    <h2>
      The secret
    </h2>
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
        <Button>
          Submit
        </Button>
      </Center>
    </form>
    <h2>How it works?</h2>
    <p>
      Noo generates strong passwords for the websites you use. Neither the password nor the secret are sent over the internet – the whole thing happens on your device.
    </p>
    <p>
      If the same secret is given, the same domain names would render the same passwords, so this is how Noo syncs. You just enter your secret and the domain – the given password will be the same.
    </p>
    <p>
      There is no way to acquire your secret from the password, so you are safe here.
    </p>
  </Fragment>

)

SecretInput.displayName = 'SecretInput'

export default connect(
  state => ({
    secret: state.ui.secret
  }),
  dispatch => ({
    edit: e => dispatch({
      type: 'editSecret', payload: e.target.value
    }),
    commit: e => { e.preventDefault(); dispatch({
      type: 'commitSecret'
    })}
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
