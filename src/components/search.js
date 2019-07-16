import React from 'react'
import { connect } from 'react-redux'

import { assoc, dispatchByEvent } from 'lib'
import Input from 'ui/input'
import Pad from 'ui/pad'

const Search = props => (
  <Pad padding='32px 0 0 0'>
    <Input
      placeholder='Search...'
      autoFocus
      {...props}
    />
  </Pad>
)

Search.displayName = 'Search'

export default connect(
  state => ({
    value: state.search
  }),
  dispatch => ({
    onChange: dispatchByEvent(dispatch, 'editSearch')
  })
)(Search)

export const actions = {
  editSearch: (state, search) => assoc(state, 'search', search)
}
