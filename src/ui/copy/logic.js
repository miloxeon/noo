export function copy (e) {
  const content = e.target.dataset.value
  if (content.length > 0) {
    const ghost = this.ghost.current
    ghost.value = content
    ghost.select()
    document.execCommand('copy')
  }
}
