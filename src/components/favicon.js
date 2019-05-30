import React, { Component, Fragment } from 'react'
import { connect, encodeIcon } from 'lib'
import { ReactComponent as Remove } from 'assets/remove.svg'

class Favicon extends Component {
  componentDidMount () {
    if (!this.props.domainEditingActive) {
      encodeIcon(this.props.name).then(value => this.props.setIcon({
        name: this.props.name,
        value
      })).catch(
        () => console.warn(`It seems like "${this.props.name}" doesn't have an icon.`)
      )
    }
  }

  static displayName = 'Favicon'

  render () {
    return (
      <Fragment>
        { !this.props.domainEditingActive &&
          <img
            alt=''
            src={ this.props.src }
            style={{
              marginRight: '8px',
              height: '16px',
              width: '16px'
            }} />
        }

        { this.props.domainEditingActive &&
          <Remove style={{
            marginLeft: '8px',
            height: '16px',
            width: '16px'
          }} />
        }
      </Fragment>
    )


    return (
      <img
        alt=''
        src={ this.props.src }
        style={{
          marginRight: '8px',
          height: '16px',
          width: '16px'
        }}
      />
    )
  }
}

export default connect(
  (state, props) => ({
    src: state.icons[props.name],
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
