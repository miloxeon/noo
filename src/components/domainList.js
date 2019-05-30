import React, { Fragment, Component } from 'react'
import { pairs, assoc, connect, onEsc } from 'lib'

import Button from 'ui/button'
import Logo from 'ui/logo'
import Domains from 'components/domains'

class DomainList extends Component {

  static displayName = 'DomainList'

  handleEsc = e => onEsc(() => {
    if (this.props.domainEditingActive && this.props.domainsExist) {
      this.props.disableDomainEditing()
    }
  })(e)

  componentDidMount () {
    document.addEventListener('keydown', this.handleEsc)
  }

  componentWillUnmount () {
    document.removeEventListener('keydown', this.handleEsc)
  }

  render () {
    return (
      <Fragment>
        <Logo>
          <h2>Passwords</h2>
        </Logo>

        { this.props.domainsExist && <Domains /> }
        { !this.props.domainsExist && <p>It's time to make some passwords.</p> }

        { !this.props.domainEditingActive && <Button
          autoFocus
          type='button'
          onClick={ this.props.activateDomainInput }
        >
          Add...
        </Button> }

        { !this.props.domainEditingActive && this.props.domainsExist &&
          <Button
            type='button'
            onClick={ this.props.toggleDomainEditing }
          >
            Edit...
          </Button>
        }

        { this.props.domainEditingActive &&
          <Button
            type='button'
            onClick={ this.props.toggleDomainEditing }
          >
            {'<'} Back
          </Button>
        }
      </Fragment>
    )
  }

}

export default connect(
  state => ({
    domainsExist: pairs(state.keys, 'name', 'password').length > 0,
    domainEditingActive: state.domainEditingActive
  }),
  dispatch => ({
    activateDomainInput: () => dispatch('activateDomainInput'),
    toggleDomainEditing: () => dispatch('toggleDomainEditing'),
    disableDomainEditing: () => dispatch('disableDomainEditing'),
  })
)(DomainList)

export const actions = {
  activateDomainInput: state => assoc(state, 'domainInputActive', true),
  toggleDomainEditing: state => assoc(state, 'domainEditingActive', !state.domainEditingActive),
  disableDomainEditing: state => assoc(state, 'domainEditingActive', false)
}
