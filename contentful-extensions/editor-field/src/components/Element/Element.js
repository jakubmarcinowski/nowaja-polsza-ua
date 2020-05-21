import React from 'react'
import Types from 'slate-prop-types'
import { classnames } from 'utils/classnames'

const Element = ({ attributes, children, element }) => {
  switch (element.type) {
    case 'block-quote':
      return <blockquote {...attributes}>{children}</blockquote>
    case 'unordered-list':
      return <ul {...attributes}>{children}</ul>
    case 'heading-one':
      return <h1 {...attributes}>{children}</h1>
    case 'heading-two':
      return <h2 {...attributes}>{children}</h2>
    case 'heading-three':
      return <h2 {...attributes}>{children}</h2>
    case 'list-item':
      return <li {...attributes}>{children}</li>
    case 'ordered-list':
      return <ol {...attributes}>{children}</ol>
    case 'align-left':
    case 'align-center':
    case 'align-right':
      return (
        <p
          {...attributes}
          className={classnames(
            attributes.className,
            `text--${element.type.split('-')[1]}`
          )}
        >
          {children}
        </p>
      )
    default:
      return <p>{children}</p>
  }
}

Element.propTypes = Types.Element

export default Element
