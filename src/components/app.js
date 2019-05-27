import React, { Component, Fragment } from 'react'
import { isParsable, connect } from 'lib'

import Logout from 'components/logout'
import DomainList from 'components/domainList'
import SecretInput from 'components/secretInput'
import NewDomainInput from 'components/newDomainInput'

import Pad from 'ui/pad'

const Default = props => (
  <Fragment>
    <DomainList />
    <Logout />
  </Fragment>
)

class App extends Component {
  static displayName = 'App'

  componentDidMount () {
    this.props.start()
  }

  render () {
    return (
      <Pad>
        { this.props.secretInputActive && <SecretInput /> }
        { this.props.domainInputActive && <NewDomainInput /> }
        { this.props.domainListActive && <Default />}
      </Pad>
    )
  }
}

export default connect(
  state => ({
    secretInputActive: !Boolean(state.secret),
    domainInputActive: Boolean(state.secret) && state.domainInputActive,
    domainListActive: Boolean(state.secret) && !state.domainInputActive,
    secret: state.secret
  }),
  dispatch => ({
    start: () => dispatch('start')
  })
)(App)

export const actions = {
  start: state => state,
  hydrate: (state, payload) =>
    isParsable(payload) ? JSON.parse(payload) : state
}
