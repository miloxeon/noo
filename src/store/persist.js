import initialState from 'store/initialState'
import { isParsable } from 'lib'
import compare from 'semver-compare'

const merge = (old, current) => {
  let result = Object.assign({}, current)

  Object.keys(current).forEach(key => {
    if (old[key]) {
      result[key] = old[key]
    }
  })

  return {
    ...result,
    version: current.version
  }
}

export default store => next => action => {
  const result = next(action)
  const currentState = store.getState()

  // update if needed
  fetch('/package.alias.json').then(res => res.json()).then(({ version }) => {
    if (compare(version, currentState.version || '0.0.1') > 0) {
      if (window.confirm('New version available. Update?')) {
        window.location.reload(true)
      }
    }
  })


  const persistedState = localStorage.getItem('noo')

  const mergedState = isParsable(persistedState) ?
    merge(JSON.parse(persistedState), currentState) :
    null

  if ((currentState === initialState) && Boolean(mergedState)) {
    store.dispatch({ type: 'hydrate', payload: mergedState })
  } else {
    localStorage.setItem('noo', JSON.stringify(currentState))
  }
  return result
}
