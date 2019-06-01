import { onEsc } from 'lib'

export function handleEsc (e) {
  return onEsc(() => {
    if (this.props.domainEditingActive && this.props.domainsExist) {
      this.props.disableDomainEditing()
    }
  })(e)
}
