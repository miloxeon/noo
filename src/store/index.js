import { createStore, applyMiddleware, compose } from 'redux'
import initialState from 'store/initialState'

import { actions as app } from 'components/app'
import { actions as logout } from 'components/logout'
import { actions as secretInput } from 'components/secretInput'
import { actions as newDomainInput } from 'components/newDomainInput'
import { actions as domainList } from 'components/domainList'
import root from 'store/actions'

const actions = {
  ...app,
  ...logout,
  ...secretInput,
  ...newDomainInput,
  ...domainList,
  ...root
}

const logger = store => next => action => {
  const result = next(action)
  const currentState = store.getState()
  const persistedState = localStorage.getItem('noo')

  if ((currentState === initialState) && Boolean(persistedState)) {
    store.dispatch({ type: 'hydrate', payload: persistedState })
  } else {
    localStorage.setItem('noo', JSON.stringify(currentState))
  }
  return result
}

export default createStore(
  (state = initialState, { type, payload }) => {
    return actions[type] ? actions[type](state, payload) : state
  },
  compose(
    applyMiddleware(logger),
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)
