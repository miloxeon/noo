import React, { Fragment } from 'react'
import { pairs, assoc, connect, index } from 'lib'

import Button from 'ui/button'
import Copy from 'ui/copy'
import Grid from 'ui/grid'

const Domain = props => (
  <Copy value={ props.password }>
    { props.name }
  </Copy>
)

const Domains = props => (
  <Grid>
    { props.domains.map(index(Domain)) }
  </Grid>
)

const DomainList = props => (
  <Fragment>
    <h2>Passwords</h2>

    { props.domainsExist && <Domains domains={ props.domains } /> }
    { !props.domainsExist && <p>You don't have any saved passwords yet.</p> }

    <Button
      autoFocus
      type='button'
      onClick={ props.activateDomainInput }
    >
      Add...
    </Button>
  </Fragment>
)

DomainList.displayName = 'DomainList'

export default connect(
  state => ({
    domains: pairs(state.keys, 'name', 'password'),
    domainsExist: pairs(state.keys, 'name', 'password').length > 0
  }),
  dispatch => ({
    activateDomainInput: () => dispatch('activateDomainInput')
  })
)(DomainList)

export const actions = {
  activateDomainInput: state => assoc(state, 'domainInputActive', true)
}
