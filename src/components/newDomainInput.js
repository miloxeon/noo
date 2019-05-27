import React from 'react'
import { connect } from 'react-redux'

import Pad from 'ui/pad'
import Input from 'ui/input'
import Button from 'ui/button'

const NewDomainInput = props => (
  <Pad padding='32px'>
    <Button type='button'>Close</Button>
    <h2>
      Add new domain
    </h2>
    <form onSubmit={ props.commit }>
      <Input
        required
        placeholder='google.com'
        value={ props.value }
        onChange={ props.edit }
      />
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        margin: '20px 0'
      }}>
        <Button>
          Add
        </Button>
      </div>
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
    })}
  })
)(NewDomainInput)

export const actions = {
  editNewDomain: (state, newDomain) => ({ ...state,
    ui: { ...state.ui, newDomain }
  }),
  commitNewDomain: state => ({ ...state,
    keys: { ...state.keys, [state.ui.newDomain]: 'supersecretpassword' },
    ui: { ...state.ui, newDomain: '' }
  })
}
