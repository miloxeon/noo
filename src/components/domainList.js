import React, { Fragment } from 'react'
import { connect } from 'react-redux'

import Button from 'ui/button'

const Domain = props => (
  <li style={{ lineHeight: '1.5' }}>
    <span>
      { props.name }
    </span>
    :&nbsp;
    <span style={{ color: 'grey' }}>
      { props.password }
    </span>
  </li>
)

const wrap = (data, index) => <Domain { ...data } key={ index } />

const DomainList = props => (
  <Fragment>
    <h2>Passwords</h2>
    {
      props.domains.length === 0 ?
        <p>You don't have any saved passwords yet.</p> :
        <ul>{ props.domains.map(wrap) }</ul>
    }
    <Button
      autoFocus
      type='button'
      onClick={ props.activateDomainInput }
    >
      Add
    </Button>
  </Fragment>
)

DomainList.displayName = 'DomainList'

export default connect(
  state => ({
    domains: Object.keys(state.keys).map(name => ({
      name,
      password: state.keys[name]
    }))
  }),
  dispatch => ({
    activateDomainInput: () => dispatch({ type: 'activateDomainInput' })
  })
)(DomainList)

export const actions = {
  activateDomainInput: state => ({ ...state,
    domainInputActive: true
  })
}
