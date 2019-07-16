import React from 'react'
import { connect as originalConnect } from 'react-redux'
import { keccak512 } from 'js-sha3'

export const pairs = (obj, key, value) =>
  Object.keys(obj).map(x => ({
    [key]: x,
    [value]: obj[x]
  }))

export const assoc = (obj, key, value) => ({ ...obj,
  [key]: value
})

export const connect = (mstp, mdtp) => originalConnect(mstp,
  ((dispatch, props) => mdtp(
    (type, payload) => dispatch({ type, payload }),
    props
  ))
)

export const isParsable = str => {
  try {
    JSON.parse(str)
  } catch (e) {
    return false
  }
  return Boolean(JSON.parse(str))
}

export const prevent = (e, next) => {
  e.preventDefault()
  return next(e)
}

const matchAndReplace = (str, dict) => {
  const keys = Object.keys(dict)
  let result = str

  keys.forEach(key => {
    result = result.replace(key, dict[key])
  })

  return result
}

const capitalizeFirstFoundLetter = str => {
  let sample = str.split('')

  for (let i = 0; i < sample.length; i++) {
    if (sample[i].toUpperCase() !== sample[i]) {
      sample[i] = sample[i].toUpperCase()
      return sample.join('')
    }
  }

  return 'A' + sample.slice(0, -1).join('')
}

export const hash = (domain, secret) => {
  const dict = {
    '1': '[',
    '3': '?',
    '5': '~',
    '8': '^',
    '9': '&'
  }

  const originalPassword = keccak512(domain + secret).slice(0, 16)

  return capitalizeFirstFoundLetter(
    matchAndReplace(originalPassword, dict)
  )
}

export const index = Component => (data, i) =>
  <Component { ...data } key={ i } />

export const encodeIcon = name => fetch('https://favicon.keeweb.info/' + name)
  .then(response => response.blob())
  .then(blob => new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onloadend = () => {
      const { result } = reader
      if (result !== 'data:') {
        resolve(result)
      } else {
        reject()
      }
    }
    reader.onerror = reject
    reader.readAsDataURL(blob)
  }))

export const omit = (obj, key) => {
  let result = {}

  Object.keys(obj).filter(entity => entity !== key).forEach(entity => {
    result[entity] = obj[entity]
  })

  return result
}

export const onEsc = cb => e => {
  if (e.key === 'Escape') {
    cb()
  }
}

export const searchInObj = (obj, query) => {
  let result = {}

  Object.keys(obj).forEach(key => {
    if (query === '' || key.includes(query)) {
      result[key] = obj[key]
    }
  })

  return result
}

export const dispatchByEvent = (dispatch, type) => e => dispatch({
  type,
  payload: e.target.value
})
