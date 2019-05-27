import { connect as originalConnect } from 'react-redux'

export const pairs = (obj, key, value) =>
  Object.keys(obj).map(x => ({
    [key]: x,
    [value]: obj[x]
  }))

export const assoc = (obj, key, value) => ({ ...obj,
  [key]: value
})

export const connect = (mstp, mdtp) => originalConnect(mstp,
  (dispatch, props) => mdtp(
    (type, payload) => dispatch({ type, payload }),
    props
  )
)

export const isParsable = str => {
  try {
    JSON.parse(str)
  } catch (e) {
    return false
  }
  return true
}
