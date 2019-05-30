import React from 'react'
import { omit } from 'lib'
import { connect } from 'react-redux'

import Copy from 'ui/copy'
import Button from 'ui/button'
import Favicon from 'components/favicon'

const computeStyle = props => ({
  padding: '8px',
  alignItems: 'center',
  display: 'flex',
  flexDirection: props.domainEditingActive ? 'row-reverse' : 'row',
  animationDelay: (-1 * (0.2 + Math.random()) / 2) + 's',
  animationDuration: (0.2 + Math.random() / 2) + 's'
})

const Domain = props => props.domainEditingActive ? (
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

Domain.displayName = 'Domain'

export default connect(
  state => ({ domainEditingActive: state.domainEditingActive }),
  (dispatch, { name }) => ({
    remove: () => dispatch({ type: 'removeKey', payload: name })
  })
)(Domain)

export const actions = {
  removeKey: (state, name) => ({ ...state,
    keys: omit(state.keys, name),
    domainEditingActive: Object.keys(state.keys).length > 1
  })
}
