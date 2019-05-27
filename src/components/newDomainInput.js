import React from 'react'
import { connect } from 'react-redux'
import { keccak512 } from 'js-sha3'

import Pad from 'ui/pad'
import Input from 'ui/input'
import Button from 'ui/button'
import Center from 'ui/center'

const hash = (domain, secret) => keccak512(domain + secret).slice(0, 16)

const NewDomainInput = props => (
  <Pad>
    <Button
      type='button'
      onClick={ props.close }
    >
      Close
    </Button>
    <h2>
      Add new domain
    </h2>
    <form onSubmit={ props.commit }>
      <Input
        autoFocus
        required
        placeholder='example.com'
        value={ props.value }
        onChange={ props.edit }
      />
      <Center>
        <Button>
          Add
        </Button>
      </Center>
    </form>
  </Pad>

)

NewDomainInput.displayName = 'NewDomainInput'

export default connect(
  state => ({
    value: state.ui.newDomain
  }),
  dispatch => ({
    edit: e => dispatch({
      type: 'editNewDomain', payload: e.target.value
    }),
    commit: e => { e.preventDefault(); dispatch({
      type: 'commitNewDomain'
    })},
    close: () => dispatch({ type: 'closeNewDomain' })
  })
)(NewDomainInput)

export const actions = {
  editNewDomain: (state, newDomain) => ({ ...state,
    ui: { ...state.ui, newDomain }
  }),
  commitNewDomain: state => ({ ...state,
    keys: { ...state.keys,
      [state.ui.newDomain]: hash(state.ui.newDomain, state.secret)
    },
    ui: { ...state.ui, newDomain: '' },
    domainInputActive: false
  }),
  closeNewDomain: state => ({ ...state,
    domainInputActive: false
  })
}
