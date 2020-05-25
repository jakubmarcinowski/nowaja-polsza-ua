import { Editor, Transforms } from 'slate'

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

export const LIST_TYPES = ['unordered-list', 'ordered-list']

export const EMPTY_STATE = [{ type: 'paragraph', children: [{ text: '' }] }]

export const toggleBlock = (editor, { format, ...other }) => {
  const isActive = isBlockActive(editor, format)
  const isList = LIST_TYPES.includes(format)

  Transforms.unwrapNodes(editor, {
    match: n => LIST_TYPES.includes(n.type),
    split: true,
  })

  if (format !== 'columns') {
    Transforms.setNodes(editor, {
      type: isActive ? 'paragraph' : isList ? 'list-item' : format,
      ...other,
    })
  } else {
    Transforms.insertNodes(
      editor,
      {
        type: format,
        ...other,
      },
      { mode: 'highest' }
    )
  }

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

export const findBlockMatches = (editor, { formats, at }) => {
  const [match] = Editor.nodes(editor, {
    match: n => formats.includes(n.type),
    at,
  })

  return match
}

export const findBlockMatch = (editor, { format, at }) => {
  return findBlockMatches(editor, { formats: [format], at })
}

export const isBlockActive = (editor, format) =>
  !!findBlockMatch(editor, { format })

export const isBlockListActive = editor => isBlockActive(editor, 'list-item')

export const isMarkActive = (editor, format) => {
  if (format === 'footnote') return isBlockActive(editor, format)
  const marks = Editor.marks(editor)
  return marks ? marks[format] === true : false
}

export const handleEnter = (event, editor) => {
  const match = findBlockMatches(editor, {
    formats: ['list-item', 'columns'],
  })
  if (event.shiftKey) {
    event.preventDefault()
    Editor.insertText(editor, '\n')
  } else if (match && match[0].type === 'columns') {
    event.preventDefault()
    const at = [match[1][0] + 1]
    Transforms.insertNodes(
      editor,
      {
        type: 'paragraph',
        children: [{ text: '' }],
      },
      { at }
    )
    return Transforms.select(editor, at)
  } else if (
    !(
      match &&
      match[0].type === 'list-item' &&
      match[0].children.find(child => !!child.text)
    )
  ) {
    event.preventDefault()
    Transforms.insertNodes(
      editor,
      {
        type: 'paragraph',
        children: [{ text: '' }],
      },
      { mode: 'highest' }
    )
  }
}
