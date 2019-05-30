import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { isParsable } from 'lib'
import { connect } from 'react-redux'
import posed, { PoseGroup } from 'react-pose'

import RawFaq from 'ui/faq'
import Pad from 'ui/pad'

import Logout from 'components/logout'
import DomainList from 'components/domainList'
import SecretInput from 'components/secretInput'
import NewDomainInput from 'components/newDomainInput'

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

const Default = connect(
  state => ({
    secretInputActive: !Boolean(state.secret),
    domainInputActive: Boolean(state.secret) && state.domainInputActive,
    domainListActive: Boolean(state.secret) && !state.domainInputActive,
    secret: state.secret
  })
)(props => (
  <Fragment>
    <PoseGroup>
      { props.secretInputActive &&
        <AnimationWrapper key='SecretInput'>
          <SecretInput />
        </AnimationWrapper>
      }
      { props.domainInputActive &&
        <AnimationWrapper key='NewDomainInput'>
          <NewDomainInput />
        </AnimationWrapper>
      }
      { props.domainListActive &&
        <AnimationWrapper key='default'>
          <DomainList />
          <Logout />
        </AnimationWrapper>
      }
    </PoseGroup>
  </Fragment>
))

const Faq = props => (
  <Fragment>
    <p>
      <Link to='/'>
        {'<'} Go to main page
      </Link>
    </p>
    <RawFaq />
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
        <Router>
          <Route exact path='/' component={ Default } />
          <Route exact path='/faq' component={ Faq } />
        </Router>
      </Pad>
    )
  }
}

export default connect(null, dispatch => ({
  start: () => dispatch({ type: 'start' })
}))(App)

export const actions = {
  start: state => state,
  hydrate: (state, payload) =>
    isParsable(payload) ? JSON.parse(payload) : state
}
