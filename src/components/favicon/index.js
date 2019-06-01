import React, { Component, Fragment } from 'react'
import { connect } from 'lib'

import { init } from './logic'
import Icon from './icon'
import Remove from './remove'

class Favicon extends Component {

  init = init.bind(this)
  static displayName = 'Favicon'

  componentDidMount () { this.init() }

  render () {
    return (
      <Fragment>
        { !this.props.domainEditingActive && <Icon { ...this.props } /> }
        { this.props.domainEditingActive && <Remove /> }
      </Fragment>
    )
  }
}

export default connect(
  (state, props) => ({
    src: state.icons[props.name],
    iconIsPresent: Boolean(state.icons[props.name]),
    domainEditingActive: state.domainEditingActive
  }),
  (dispatch, props) => ({
    setIcon: tuple => dispatch('setIcon', tuple)
  })
)(Favicon)

export const actions = {
  setIcon: (state, { name, value }) => ({ ...state,
    icons: { ...state.icons,
      [name]: value
    }
  })
}
