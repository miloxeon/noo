import React, { Fragment } from 'react'
import { pairs, assoc, connect, index } from 'lib'

import Button from 'ui/button'
import Copy from 'ui/copy'
import Grid from 'ui/grid'
import Logo from 'ui/logo'

import Domains from 'components/domains'
import Favicon from 'components/favicon'

const DomainList = props => (
  <Fragment>
    <Logo>
      <h2>Passwords</h2>
    </Logo>

    { props.domainsExist && <Domains /> }
    { !props.domainsExist && <p>You don't have any saved passwords yet.</p> }

    <Button
      autoFocus
      type='button'
      onClick={ props.activateDomainInput }
    >
      Add...
    </Button>
    <Button
      type='button'
      onClick={ props.toggleDomainEditing }
    >
      Edit...
    </Button>
  </Fragment>
)

DomainList.displayName = 'DomainList'

export default connect(
  state => ({
    domainsExist: pairs(state.keys, 'name', 'password').length > 0
  }),
  dispatch => ({
    activateDomainInput: () => dispatch('activateDomainInput'),
    toggleDomainEditing: () => dispatch('toggleDomainEditing')
  })
)(DomainList)

export const actions = {
  activateDomainInput: state => assoc(state, 'domainInputActive', true),
  toggleDomainEditing: state => assoc(state, 'domainEditingActive', !state.domainEditingActive)
}
