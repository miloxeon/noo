export const pairs = (obj, key, value) =>
  Object.keys(obj).map(x => ({
    [key]: x,
    [value]: obj[x]
  }))
