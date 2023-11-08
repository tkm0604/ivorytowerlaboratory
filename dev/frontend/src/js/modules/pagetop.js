export function pagetop() {
  const btn = document.querySelector('.js-pagetop')
  btn.addEventListener('click', pagetopLink)
}

export const pagetopLink = () => {
  window.scroll({ top: 0, behavior: 'smooth' })
}
