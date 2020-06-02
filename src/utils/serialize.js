import escapeHtml from 'escape-html'
import { Text } from 'slate'
import { Images, StatementImage } from '../components/Images'
import classnames from 'classnames'

export const serializeSlate = data => {
  const html = {
    children: JSON.parse(data),
  }
  return serialize(html)
}

const Leaf = node => {
  if (node.bold) {
    return `<strong>${escapeHtml(node.text)}</strong>`
  }

  if (node.code) {
    return `<code>${escapeHtml(node.text)}</code>`
  }

  if (node.italic) {
    return `<em>${escapeHtml(node.text)}</em>`
  }

  if (node.underline) {
    return `<u>${escapeHtml(node.text)}</u>`
  }

  return escapeHtml(node.text)
}

const serialize = node => {
  if (Text.isText(node)) {
    return Leaf(node)
  }
  const children = node.children.map(n => serialize(n)).join('')

  switch (node.type) {
    case 'block-quote':
      return `<blockquote>${children}</blockquote>`
    case 'unordered-list':
      return `<ul>${children}</ul>`
    case 'heading-one':
      return `<h1>${children}</h1>`
    case 'heading-two':
      return `<h2>${children}</h2>`
    case 'heading-three':
      return `<h2>${children}</h2>`
    case 'list-item':
      return `<li>${children}</li>`
    case 'ordered-list':
      return `<ol>${children}</ol>`
    case 'align-left':
    case 'align-center':
    case 'align-right':
    case 'align-justify':
      return `<p
          class="${classnames(`text--${node.type.split('-')[1]}`)}"
        >
          ${children}
      </p>`
    case 'soundcloud':
      return `<iframe
        width="100%"
        height="300"
        scrolling="no"
        frameBorder="no"
        allow="autoplay"
        src="https://w.soundcloud.com/player/?url=https://soundcloud.com/${node.content}"
      ></iframe>`
    case 'youtube':
      return `<iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/${node.content}"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>`
    case 'footnote':
      return `<a class="footnote" href="#">
          <span class="annotation-tooltip">${node.content}</span>
        </a>`
    case 'images':
      return Images(node)
    case 'link':
      return `<a href="${escapeHtml(node.url)}">${children}</a>`
    case 'columns':
      return `<div class="columns">${children}</div>`
    case 'column':
      return `<div class="column">${children}</div>`
    case 'statement':
      return `<div class="statement">${children}</div>`
    case 'statement-author':
      return `<div class="statement-author">
        ${StatementImage(node.image)}
        <div class="statement-name-wrapper">
          <span class="statement-name">${children}</span>
          <svg class="statement-icon" width="55px" height="24px" viewBox="0 0 55 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <g id="2-R" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">
              <g id="Wywiad_mobile_a" transform="translate(-131.000000, -1409.000000)" stroke="currentColor">
                <g id="M_ciciek" transform="translate(132.000000, 1411.692388)">
                  <g id="Group-Copy-12" transform="translate(26.705662, 9.500000) rotate(-135.000000) translate(-26.705662, -9.500000) translate(20.205662, 3.000000)">
                    <line x1="2.02128484e-13" y1="4.02987356" x2="13" y2="4.08579595" id="Line"></line>
                    <line x1="4.08675214" y1="0" x2="4.08675214" y2="13" id="Line"></line>
                  </g>
                  <line x1="20.5" y1="6.59709837" x2="9.32232069e-12" y2="6.59709837" id="Line-2-Copy-21"></line>
                  <line x1="53.3908721" y1="6.59709837" x2="32.8908721" y2="6.59709837" id="Line-2-Copy-22"></line>
                </g>
              </g>
            </g>
          </svg>
        </div>
      </div>`
    case 'statement-paragraph':
      return `<p class="statement-paragraph">${children}</p>`
    default:
      return `<p>${children}</p>`
  }
}
