import React, { Component, Fragment } from 'react'
import style from './style.module.css'
import { copy } from './logic'

import Button from 'ui/button'
import { Tooltip } from 'react-tippy'

class Copy extends Component {
  ghost = React.createRef()
  button = React.createRef()
  copy = copy.bind(this)

  state = {
    open: false
  }

  trigger = () => {
    this.setState(state => ({ ...state, open: true }))

    this.copy()

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
          <Button
            ref={ this.button }
            { ...this.props }
            onClick={ this.trigger }
            data-value={ this.props.value }
            >
              { this.props.children }
            </Button>
        </Tooltip>
        <textarea
          hidden
          ref={ this.ghost }
          className={ style.ghost }
        ></textarea>
      </Fragment>
    )
  }
}

export default Copy
