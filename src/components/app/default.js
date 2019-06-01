import React from 'react'
import { connect } from 'react-redux'
import { PoseGroup } from 'react-pose'

import AnimationWrapper from './animationWrapper'
import SecretInput from './secretInput'
import DomainList from './domainList'

import NewDomainInput from 'components/newDomainInput'


const Default = props => (
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
      <AnimationWrapper key='Default'>
        <DomainList />
      </AnimationWrapper>
    }
  </PoseGroup>
)

Default.displayName = 'Default'


export default connect(
  state => ({
    secretInputActive: !Boolean(state.secret),
    domainInputActive: Boolean(state.secret) && state.domainInputActive,
    domainListActive: Boolean(state.secret) && !state.domainInputActive,
    secret: state.secret
  })
)(Default)
