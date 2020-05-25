import React, { useCallback, useMemo, useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import isHotkey from 'is-hotkey'
import { Editable, withReact, Slate } from 'slate-react'
import { createEditor } from 'slate'
import { withHistory } from 'slate-history'
import { Element, Leaf, Toolbar } from 'components'
import { ToolbarButtonContainer } from 'containers'
import {
  isMarkActive,
  isBlockActive,
  toggleMark,
  toggleBlock,
  handleEnter,
} from 'utils/editor'
import { inlineButtons, blockButtons } from 'utils/button-types'

const HOTKEYS = {
  'mod+b': 'bold',
  'mod+i': 'italic',
  'mod+u': 'underline',
  'mod+`': 'code',
}

const customInlineElements = ['link', 'footnote']

const toolbarInlineButtons = [
  inlineButtons.BOLD,
  inlineButtons.ITALIC,
  inlineButtons.UNDERLINE,
  inlineButtons.FOOTNOTE,
]
const toolbarBlockButtons = [
  blockButtons.HEADING_ONE,
  blockButtons.HEADING_TWO,
  blockButtons.HEADING_THREE,
  blockButtons.UNORDERED_LIST,
  blockButtons.ORDERED_LIST,
  blockButtons.ALIGN_LEFT,
  blockButtons.ALIGN_CENTER,
  blockButtons.ALIGN_RIGHT,
  blockButtons.ALIGN_JUSTIFY,
  blockButtons.BLOCKQUOTE,
  blockButtons.COLUMNS,
]

const Editor = ({ valueChanged, initValue }) => {
  const [value, setValue] = useState(initValue || initialValue)
  const renderElement = useCallback(props => <Element {...props} />, [])
  const renderLeaf = useCallback(props => <Leaf {...props} />, [])
  const editor = useMemo(
    () => withCustomElements(withHistory(withReact(createEditor()))),
    []
  )
  useEffect(() => {
    valueChanged(value)
  }, [value])

  return (
    <>
      <Slate editor={editor} value={value} onChange={value => setValue(value)}>
        <Toolbar>
          {toolbarInlineButtons.map(props => (
            <ToolbarButtonContainer
              key={props.value}
              isActiveChecker={isMarkActive}
              onToggle={toggleMark}
              {...props}
            />
          ))}
          {toolbarBlockButtons.map(props => (
            <ToolbarButtonContainer
              key={props.value}
              isActiveChecker={isBlockActive}
              onToggle={toggleBlock}
              {...props}
            />
          ))}
        </Toolbar>
        <div className="editable-area">
          <Editable
            renderElement={renderElement}
            renderLeaf={renderLeaf}
            spellCheck
            autoFocus
            onKeyDown={event => {
              if (event.key === 'Enter') {
                return handleEnter(event, editor)
              }
              for (const hotkey in HOTKEYS) {
                if (isHotkey(hotkey, event)) {
                  event.preventDefault()
                  const mark = HOTKEYS[hotkey]
                  toggleMark(editor, { format: mark })
                }
              }
            }}
          />
        </div>
      </Slate>
      {/* <pre>{JSON.stringify(value, null, 2)}</pre> */}
    </>
  )
}

const withCustomElements = editor => {
  const { isInline } = editor

  editor.isInline = element => {
    return customInlineElements.includes(element.type) || isInline(element)
  }

  return editor
}

const initialValue = [
  {
    type: 'paragraph',
    children: [
      { text: 'This is editable ' },
      { text: 'rich', bold: true },
      { text: ' text, ' },
      { text: 'much', italic: true },
      { text: ' better than a ' },
      { text: '<textarea>', code: true },
      { text: '!' },
    ],
  },
  {
    type: 'paragraph',
    children: [
      {
        text:
          "Since it's rich text, you can do things like turn a selection of text ",
      },
      { text: 'bold', bold: true },
      {
        text:
          ', or add a semantically rendered block quote in the middle of the page, like this:',
      },
    ],
  },
  {
    type: 'block-quote',
    children: [{ text: 'A wise quote.' }],
  },
  {
    type: 'paragraph',
    children: [{ text: 'Try it out for yourself!' }],
  },
]

Editor.propTypes = {
  valueChanged: PropTypes.func,
  initValue: PropTypes.object,
}

Editor.defaultProps = {
  valueChanged: () => {},
  initialValue: null,
}

export default Editor
