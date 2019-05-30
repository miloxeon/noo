import React, { Fragment } from 'react'
import { connect, prevent, assoc, hash } from 'lib'

import Input from 'ui/input'
import Button from 'ui/button'
import Center from 'ui/center'

const NewDomainInput = props => (
  <Fragment>
    <Button type='button' onClick={ props.close }>
      Close
    </Button>
    <h2>Add new domain</h2>
    <form onSubmit={ props.commit }>
      <Input
        autoFocus
        required
        placeholder='example.com'
        value={ props.value }
        onChange={ props.edit }
      />
      <Center>
        <Button>Add</Button>
      </Center>
    </form>
  </Fragment>
)

NewDomainInput.displayName = 'NewDomainInput'

export default connect(
  state => ({
    value: state.ui.newDomain
  }),
  dispatch => ({
    edit: e => dispatch('editNewDomain', e.target.value),
    commit: e => prevent(e, () => dispatch('commitNewDomain')),
    close: () => dispatch('closeNewDomain')
  })
)(NewDomainInput)

export const actions = {
  editNewDomain: (state, newDomain) => ({ ...state,
    ui: { ...state.ui, newDomain }
  }),
  commitNewDomain: state => ({ ...state,
    keys: { ...state.keys,
      [state.ui.newDomain.toLowerCase()]: hash(state.ui.newDomain.toLowerCase(), state.secret)
    },
    ui: { ...state.ui, newDomain: '' },
    domainInputActive: false
  }),
  closeNewDomain: state => assoc(state, 'domainInputActive', false)
}
