import escapeHtml from 'escape-html'
import { Text } from 'slate'
import { Images } from '../components/Images'
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
    default:
      return `<p>${children}</p>`
  }
}
