import React from 'react'
import { pairs, index, searchInObj } from 'lib'
import { connect } from 'react-redux'

import Grid from 'ui/grid'
import Domain from 'components/domain'

const Domains = props => (
  <Grid>
    { props.domains.map(index(Domain)) }
  </Grid>
)

Domains.displayName = 'Domains'

export default connect(
  state => ({
    domains: pairs(
      searchInObj(state.keys, state.search),
    'name', 'password'),
  })
)(Domains)

export const actions = {}
