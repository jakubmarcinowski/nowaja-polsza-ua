import { Editor, Transforms } from 'slate'

const LIST_TYPES = ['unordered-list', 'ordered-list']

const toggleFootnote = (editor, { format, props, at }) => {
  const match = findBlockMatch(editor, { format, at })
  const node = {
    type: 'footnote',
    children: [{ text: '[1]' }],
    ...props,
  }
  if (match) {
    Transforms.setNodes(editor, node, { at: match[1] })
  } else {
    Transforms.insertNodes(editor, node, { at })
  }
}

export const toggleBlock = (editor, { format }) => {
  const isActive = isBlockActive(editor, format)
  const isList = LIST_TYPES.includes(format)

  Transforms.unwrapNodes(editor, {
    match: n => LIST_TYPES.includes(n.type),
    split: true,
  })

  Transforms.setNodes(editor, {
    type: isActive ? 'paragraph' : isList ? 'list-item' : format,
  })

  if (!isActive && isList) {
    const block = { type: format, children: [] }
    Transforms.wrapNodes(editor, block)
  }
}

export const toggleMark = (editor, { format, props, at }) => {
  if (format === 'footnote') {
    return toggleFootnote(editor, { format, props, at })
  }

  const isActive = isMarkActive(editor, format)

  if (isActive) {
    Editor.removeMark(editor, format)
  } else {
    Editor.addMark(editor, format, true)
  }
}

export const findBlockMatch = (editor, { format, at }) => {
  const [match] = Editor.nodes(editor, {
    match: n => n.type === format,
    at,
  })

  return match
}

export const isBlockActive = (editor, format) => {
  return !!findBlockMatch(editor, { format })
}

export const isMarkActive = (editor, format) => {
  if (format === 'footnote') return isBlockActive(editor, format)
  const marks = Editor.marks(editor)
  return marks ? marks[format] === true : false
}
