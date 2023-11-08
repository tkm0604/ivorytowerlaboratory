export default function innerLinkSummery() {
  // ページ内リンク
  innerLinkMain('.js-inner-link')
}

export const innerLinkMain = (triggerClassStr) => {
  const triggers = document.querySelectorAll(triggerClassStr)

  triggers.forEach((trigger) => {
    trigger.addEventListener('click', innerLink)
  })
}

export const innerLink = (event) => {
  event.preventDefault()
  innerLinkWithHash(event?.currentTarget?.hash ?? "html")
}

export const innerLinkWithHash = (hash) => {
  const header =  document.querySelector('.l-header')
  const el = document.querySelectorAll(hash)[0]
  const headerHeight   = header.clientHeight
  const targetPosition = el.offsetTop - headerHeight
  const startPosition = document.scrollingElement.scrollTop
  let currentPosition = document.scrollingElement.scrollTop

  const goDown = currentPosition < targetPosition
  const interval = setInterval(function () {
    const mp = movingPosition(startPosition, targetPosition, currentPosition)
    currentPosition += goDown ? mp + 5 : -mp - 5
    if (goDown && currentPosition > targetPosition
      || !goDown && currentPosition < targetPosition) {
      clearInterval(interval)
      document.scrollingElement.scrollTop = targetPosition
    }
    document.scrollingElement.scrollTop = currentPosition
  }, 10)
}

const movingPosition = (start, target, current) => {
  const sin = Math.sin((current - target) / (start - target) * Math.PI)
  return sin * 200//speed
}