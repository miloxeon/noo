import React, { Component } from 'react'
import { connect, encodeIcon } from 'lib'

class Favicon extends Component {
  componentDidMount () {
    encodeIcon(this.props.name).then(value => this.props.setIcon({
      name: this.props.name,
      value
    }))
  }

  static displayName = 'Favicon'

  render () {
    return (
      <img alt='' src={ this.props.src } style={{ marginRight: '4px' }} />
    )
  }
}

export default connect(
  (state, props) => ({
    src: state.icons[props.name]
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
