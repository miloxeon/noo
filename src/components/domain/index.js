import React from 'react'
import { omit } from 'lib'
import { connect } from 'react-redux'

import Remove from './remove'
import Copy from './copy'

const Domain = props => props.domainEditingActive ? (
  <Remove { ...props } />
) : (
  <Copy { ...props } />
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
