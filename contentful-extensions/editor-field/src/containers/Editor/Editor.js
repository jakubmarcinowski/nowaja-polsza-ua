import React, { useCallback, useMemo } from 'react'
import PropTypes from 'prop-types'
import isHotkey from 'is-hotkey'
import { Editable, withReact, Slate } from 'slate-react'
import { createEditor } from 'slate'
import { withHistory } from 'slate-history'
import { Element, Leaf, Toolbar } from 'components'
import { ToolbarButtonContainer, InlineToolbar } from 'containers'
import {
  isMarkActive,
  isBlockActive,
  toggleMark,
  toggleBlock,
  handleEnter,
  EMPTY_STATE,
} from 'utils/editor'
import {
  inlineButtons,
  blockButtons,
  fullscreenButton,
} from 'utils/button-types'

const HOTKEYS = {
  'mod+b': 'bold',
  'mod+i': 'italic',
  'mod+u': 'underline',
  'mod+`': 'code',
}

const customInlineElements = ['footnote', 'link']

const toolbarInlineButtons = [
  inlineButtons.BOLD,
  inlineButtons.ITALIC,
  inlineButtons.UNDERLINE,
  inlineButtons.IMAGES,
  inlineButtons.YOUTUBE,
  inlineButtons.SOUNDCLOUD,
  inlineButtons.LINK,
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
  blockButtons.STATEMENT,
]

const EditorComponent = ({
  valueChanged,
  value,
  isFullscreen,
  toggleFullscreen,
  pickImage,
  buildImageFluid,
}) => {
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
        onChange={valueChanged}
      >
        <Toolbar>
          {toolbarInlineButtons.map(props => (
            <ToolbarButtonContainer
              key={props.value}
              isActiveChecker={isMarkActive}
              onToggle={toggleMark}
              pickImage={pickImage}
              buildImageFluid={buildImageFluid}
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
          <ToolbarButtonContainer
            onToggle={toggleFullscreen}
            {...fullscreenButton(isFullscreen)}
          />
        </Toolbar>
        <InlineToolbar buildImageFluid={buildImageFluid} />
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

EditorComponent.propTypes = {
  value: PropTypes.array.isRequired,
  valueChanged: PropTypes.func.isRequired,
  isFullscreen: PropTypes.bool.isRequired,
  toggleFullscreen: PropTypes.func.isRequired,
  buildImageFluid: PropTypes.func.isRequired,
  pickImage: PropTypes.func,
}

export default EditorComponent
