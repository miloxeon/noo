import React from 'react'
import { pairs, index, omit } from 'lib'
import { connect } from 'react-redux'

import Copy from 'ui/copy'
import Button from 'ui/button'
import Grid from 'ui/grid'
import Favicon from 'components/favicon'

const computeStyle = props => ({
  padding: '8px',
  alignItems: 'center',
  display: 'flex',
  flexDirection: props.domainEditingActive ? 'row-reverse' : 'row',
  animationDelay: (-1 * (0.2 + Math.random()) / 2) + 's',
  animationDuration: (0.2 + Math.random() / 2) + 's'
})

const Domain = connect(
  state => ({ domainEditingActive: state.domainEditingActive }),
  (dispatch, { name }) => ({
    remove: () => dispatch({ type: 'removeKey', payload: name })
  })
)(
  props => props.domainEditingActive ? (
    <Button
      onClick={ props.remove }
      style={ computeStyle(props) }
      className='shake'
    >
      <Favicon name={ props.name } />
      { props.name }
    </Button>
  ) : (
    <Copy value={ props.password } style={ computeStyle(props) }>
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
  removeKey: (state, name) => ({ ...state,
    keys: omit(state.keys, name)
  })
}
