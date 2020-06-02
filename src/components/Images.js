import classnames from 'classnames'

export const Images = ({ children, fluid, url, float, maxWidth }) => {
  const isFloatActive = float === 'left'
  return `<div
  class="${classnames('img-wrapper', {
    ['img-wrapper--centered']: !isFloatActive,
  })}"
  )}
>
  <img
    sizes="${fluid.sizes}"
    srcset="${fluid.srcSet}"
    class="${classnames({ ['img--left']: isFloatActive })}"
    style="maxWidth: ${maxWidth}px;"
    src=${url}
  />
  <span class="${classnames('tag', { ['tag--left']: isFloatActive })}">
    ${children[0].text}
  </span>
</div>`
}

export const StatementImage = ({ fluid }) => {
  return `<img class="statement-image" sizes="${fluid.sizes}" srcset="${fluid.webpSrcSet}">`
}
