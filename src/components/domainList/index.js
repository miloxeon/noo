import React, { Fragment, Component } from 'react'
import { pairs, assoc, connect } from 'lib'

import { handleEsc } from './logic'
import Header from './header'
import Prompt from './prompt'
import Add from './add'
import Edit from './edit'
import Back from './back'

import Domains from 'components/domains'

class DomainList extends Component {

  static displayName = 'DomainList'
  handleEsc = handleEsc.bind(this)

  componentDidMount () {
    document.addEventListener('keydown', this.handleEsc)
  }

  componentWillUnmount () {
    document.removeEventListener('keydown', this.handleEsc)
  }

  render () {
    return (
      <Fragment>

        <Header />

        { this.props.domainsExist && <Domains /> }
        { !this.props.domainsExist && <Prompt /> }

        { !this.props.domainEditingActive && <Add { ...this.props } /> }
        { this.props.domainEditingActive && <Back { ...this.props } /> }

        { !this.props.domainEditingActive &&
          this.props.domainsExist &&
            <Edit { ...this.props } />
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
