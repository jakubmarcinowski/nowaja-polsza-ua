import React from 'react'
import Types from 'slate-prop-types'
import { Footnote } from 'components'

const Leaf = ({ attributes, children, leaf }) => {
  if (leaf.bold) {
    children = <strong>{children}</strong>
  }

  if (leaf.code) {
    children = <code>{children}</code>
  }

  if (leaf.italic) {
    children = <em>{children}</em>
  }

  if (leaf.underline) {
    children = <u>{children}</u>
  }

  if (leaf.footnote) {
    return (
      <>
        {children}
        <Footnote>[1]</Footnote>
      </>
    )
  }

  return <span {...attributes}>{children}</span>
}

Leaf.propTypes = Types.Leaf

export default Leaf
