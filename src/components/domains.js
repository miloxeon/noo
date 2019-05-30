import React from 'react'
import { pairs, index } from 'lib'
import { connect } from 'react-redux'

import Copy from 'ui/copy'
import Grid from 'ui/grid'
import Favicon from 'components/favicon'

const Domain = connect(
  state => ({ domainEditingActive: state.domainEditingActive })
)(
  props => (
    <Copy value={ props.password } style={{
      padding: '8px',
      alignItems: 'center',
      display: 'flex',
      animationDelay: (-1 * Math.random() / 2) + 's',
      animationDuration: (0.2 + Math.random() / 2) + 's'
    }} className={ props.domainEditingActive && 'shake' }>
      <Favicon name={ props.name } />
      { props.name }
    </Copy>
  )
)

const DomainList = props => (
  <Grid>
    { props.domains.map(index(Domain)) }
  </Grid>
)

DomainList.displayName = 'DomainList'

export default connect(
  state => ({
    domains: pairs(state.keys, 'name', 'password'),
  })
)(DomainList)

export const actions = {
}
