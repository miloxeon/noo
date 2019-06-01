import React, { Component, Fragment } from 'react'
import Clipboard from 'react-clipboard.js'
import { Tooltip } from 'react-tippy'

import Button from 'ui/button'

class Copy extends Component {
  state = {
    open: false
  }

  trigger = () => {
    this.setState(state => ({ ...state, open: true }))
    setTimeout(
      () => this.setState(state => ({ ...state, open: false })),
      1000
    )
  }

  render () {
    return (
      <Fragment>
        <Tooltip
          title='Password copied'
          position='top'
          trigger='manual'
          { ...this.state }
        >
          <Clipboard
            { ...this.props }
            component={ Button }
            data-clipboard-text={ this.props.value }
            onSuccess={ this.trigger }
          >
            { this.props.children }
          </Clipboard>
        </Tooltip>
      </Fragment>
    )
  }
}

export default Copy
