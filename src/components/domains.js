import React from 'react'
import { pairs, index, omit } from 'lib'
import { connect } from 'react-redux'

import Copy from 'ui/copy'
import Button from 'ui/button'
import Grid from 'ui/grid'

import Favicon from 'components/favicon'
import Domain from 'components/domain'

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

export const actions = {}
