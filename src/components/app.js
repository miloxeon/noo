import React, { Component, Fragment } from 'react'
import { isParsable, connect } from 'lib'
import posed, { PoseGroup } from 'react-pose'

import Logout from 'components/logout'
import DomainList from 'components/domainList'
import SecretInput from 'components/secretInput'
import NewDomainInput from 'components/newDomainInput'

import Pad from 'ui/pad'

const AnimationWrapper = posed.div({
  enter: {
    x: 0,
    opacity: 1,
    delay: 150,
    transition: {
      x: { type: 'spring', stiffness: 1000, damping: 15 },
      default: { duration: 300 }
    }
  },
  exit: {
    x: 50,
    opacity: 0,
    transition: { duration: 150 }
  }
})

class App extends Component {
  static displayName = 'App'

  componentDidMount () {
    this.props.start()
  }

  render () {
    return (
      <Pad>
        <PoseGroup>
          { this.props.secretInputActive &&
            <AnimationWrapper key='SecretInput'>
              <SecretInput />
            </AnimationWrapper>
          }
          { this.props.domainInputActive &&
            <AnimationWrapper key='NewDomainInput'>
              <NewDomainInput />
            </AnimationWrapper>
          }
          { this.props.domainListActive &&
            <AnimationWrapper key='default'>
              <DomainList />
              <Logout />
            </AnimationWrapper>
          }
        </PoseGroup>
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
