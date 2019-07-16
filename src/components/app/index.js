import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import { version } from 'package.alias.json'

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
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={ Default } />
            <Route exact path='/faq' component={ Faq } />
            <Route component={ ToHome } />
          </Switch>
        </BrowserRouter>
        <code className='tiny'>
          { version }
        </code>
      </Pad>
    )
  }
}

export default connect(null, dispatch => ({
  start: () => dispatch({ type: 'start' })
}))(App)

export const actions = {
  start: state => state,
  hydrate: (state, payload) => payload
}
