import React, { Fragment, Component } from 'react'
import { connect, prevent, assoc, hash, onEsc } from 'lib'

import Input from 'ui/input'
import Button from 'ui/button'
import Center from 'ui/center'

class NewDomainInput extends Component {

  static displayName = 'NewDomainInput'

  componentDidMount () {
    document.addEventListener('keydown', onEsc(this.props.close))
  }

  componentWillUnmount () {
    document.removeEventListener('keydown', onEsc(this.props.close))
  }

  render () {
    return (
      <Fragment>
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button type='button' onClick={ this.props.close }>
            Close
          </Button>
        </div>
        <h2>Add new domain</h2>
        <form onSubmit={ this.props.commit }>
          <Input
            autoFocus
            required
            placeholder='example.com'
            value={ this.props.value }
            onChange={ this.props.edit }
          />
          <Center>
            <Button>Add</Button>
          </Center>
        </form>
      </Fragment>
    )
  }
}

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
