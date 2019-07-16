import React, { Fragment, Component } from 'react'
import { pairs, assoc, connect } from 'lib'

import { handleEsc } from './logic'
import Header from './header'
import Prompt from './prompt'
import Add from './add'
import Edit from './edit'
import Back from './back'

import Search from 'components/search'
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

        { (this.props.manyDomains || this.props.searchIsNotEmpty) &&
          <Search />
        }

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
    manyDomains: pairs(state.keys, 'name', 'password').length > 4,
    domainEditingActive: state.domainEditingActive,
    searchIsNotEmpty: state.search.length > 0
  }),
  dispatch => ({
    activateDomainInput: () => dispatch('activateDomainInput'),
    toggleDomainEditing: () => dispatch('toggleDomainEditing')
  })
)(DomainList)

export const actions = {
  activateDomainInput: state => assoc(state, 'domainInputActive', true),
  toggleDomainEditing: state => state.domainEditingActive ? ({
    ...state,
    domainEditingActive: false,
    search: ''
  }) : assoc(state, 'domainEditingActive', true)
}
