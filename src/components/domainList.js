import React from 'react'
import { connect } from 'react-redux'

const Domain = props => (
  <li>
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
  <ul>
    { props.domains.map(wrap) }
  </ul>
)

DomainList.displayName = 'DomainList'

export default connect(
  state => ({
    domains: Object.keys(state.keys).map(name => ({
      name,
      password: state.keys[name]
    }))
  })
)(DomainList)
