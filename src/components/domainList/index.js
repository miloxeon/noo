import React, { Fragment, Component } from 'react'
import { assoc, connect, searchInObj } from 'lib'

import { handleEsc } from './logic'
import Header from './header'
import Prompt from './prompt'
import Add from './add'
import Edit from './edit'
import Back from './back'
import NothingFound from './nothingFound'

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

        { this.props.domainsExist &&
          (this.props.manyDomains || this.props.searchIsNotEmpty) &&
          <Search />
        }

        { !this.props.nothingFound && this.props.domainsExist && <Domains /> }
        { !this.props.domainsExist && <Prompt /> }
        { this.props.nothingFound && <NothingFound /> }

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
    domainsExist: Object.keys(state.keys).length > 0,
    manyDomains: Object.keys(state.keys).length > 4,
    nothingFound:
      Object.keys(state.keys).length > 0 &&
      Object.keys(searchInObj(state.keys, state.search)).length === 0,
    domainEditingActive: state.domainEditingActive,
    searchIsNotEmpty: state.search.length > 0
  }),
  dispatch => ({
    activateDomainInput: () => dispatch('activateDomainInput'),
    toggleDomainEditing: () => dispatch('toggleDomainEditing')
  })
)(DomainList)

export const actions = {
  activateDomainInput: state => ({
    ...state,
    domainInputActive: true,
    search: ''
  }),
  toggleDomainEditing: state => state.domainEditingActive ? ({
    ...state,
    domainEditingActive: false,
    search: ''
  }) : assoc(state, 'domainEditingActive', true)
}
