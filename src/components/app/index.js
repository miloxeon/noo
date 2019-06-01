import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { isParsable } from 'lib'
import { connect } from 'react-redux'

import Faq from './faq'
import ToHome from './toHome'
import Default from './default'

import Pad from 'ui/pad'

class App extends Component {
  static displayName = 'App'

  componentDidMount () {
    this.props.start()
  }

  render () {
    return (
      <Pad>
        <Router>
          <Switch>
            <Route exact path='/' component={ Default } />
            <Route exact path='/faq' component={ Faq } />
            <Route component={ ToHome } />
          </Switch>
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
