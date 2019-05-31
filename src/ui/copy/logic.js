export function copy (e) {

  const content = e.target.dataset.value

  if (content.length > 0) {

    // get the textarea
    const ghost = this.ghost.current

    // unhide it
    ghost.removeAttribute('hidden')

    // assign the value to copy
    ghost.value = content

    // necessary
    ghost.contentEditable = true

    // some range magic
    const range = document.createRange()
    range.selectNodeContents(ghost)
    const s = window.getSelection()
    s.removeAllRanges()
    s.addRange(range)
    ghost.setSelectionRange(0, 999999)

    // copy
    document.execCommand('copy')

    // hide it again
    ghost.setAttribute('hidden', true)

    // refocus
    this.button.current.focus()
  }
}
