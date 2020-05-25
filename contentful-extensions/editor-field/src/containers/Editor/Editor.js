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
  EMPTY_STATE,
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

const Editor = ({ valueChanged, value }) => {
  const renderElement = useCallback(props => <Element {...props} />, [])
  const renderLeaf = useCallback(props => <Leaf {...props} />, [])
  const editor = useMemo(
    () => withCustomElements(withHistory(withReact(createEditor()))),
    []
  )

  return (
    <>
      <Slate
        editor={editor}
        value={value || EMPTY_STATE}
        onChange={v => valueChanged(v)}
      >
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

Editor.propTypes = {
  value: PropTypes.array.isRequired,
  valueChanged: PropTypes.func.isRequired,
}

export default Editor
