import { createStore, applyMiddleware, compose } from 'redux'
import persist from './persist'
import initialState from 'store/initialState'

// actions
import { actions as app } from 'components/app'
import { actions as logout } from 'components/logout'
import { actions as secretInput } from 'components/secretInput'
import { actions as newDomainInput } from 'components/newDomainInput'
import { actions as domainList } from 'components/domainList'
import { actions as favicon } from 'components/favicon'
import root from 'store/actions'

const actions = {
  ...app,
  ...logout,
  ...secretInput,
  ...newDomainInput,
  ...domainList,
  ...favicon,
  ...root
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default createStore(
  (state = initialState, { type, payload }) => {
    return actions[type] ? actions[type](state, payload) : state
  },
  composeEnhancers(
    applyMiddleware(persist)
  )
)
