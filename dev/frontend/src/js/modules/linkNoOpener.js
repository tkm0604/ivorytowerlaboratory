export function linkNoOpener() {
  const links = document.querySelectorAll('a[target="_blank"]')
  links.forEach(link => {
    link.setAttribute('rel', 'noopener noreferrer')
  })
}