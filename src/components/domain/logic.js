export const computeStyle = props => ({
  padding: '8px',
  alignItems: 'center',
  display: 'flex',
  flexDirection: props.domainEditingActive ? 'row-reverse' : 'row'
})

export const isDomain = str => /(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z0-9][a-z0-9-]{0,61}[a-z0-9]/.test(str)
