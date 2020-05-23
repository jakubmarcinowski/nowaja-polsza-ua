import React, { useCallback, useMemo, useState } from 'react'
import isHotkey from 'is-hotkey'
import { Editable, withReact, Slate } from 'slate-react'
import { createEditor, Editor, Transforms } from 'slate'
import { withHistory } from 'slate-history'
import {
  Element,
  Leaf,
  Toolbar,
  BoldButton,
  UnderlineButton,
  ItalicButton,
  UnorderedListButton,
  OrderedListButton,
  AlignLeftButton,
  AlignRightButton,
  AlignCenterButton,
  HeadingButton,
  AlignJustifyButton,
  QuoteButton,
  FootnoteButton,
  ColumnsButton,
} from 'components'
import { ToolbarButtonContainer } from 'containers'
import {
  isMarkActive,
  isBlockActive,
  toggleMark,
  toggleBlock,
  findBlockMatch,
  handleEnter,
} from 'utils/editor'

const HOTKEYS = {
  'mod+b': 'bold',
  'mod+i': 'italic',
  'mod+u': 'underline',
  'mod+`': 'code',
}

const customInlineElements = ['link', 'footnote']

const inlineButtons = [
  { value: 'bold', Component: BoldButton },
  { value: 'italic', Component: ItalicButton },
  { value: 'underline', Component: UnderlineButton },
  {
    value: 'footnote',
    Component: FootnoteButton,
    dialog: {
      title: 'Przypis',
      label: 'Przypis',
      getInitValue: editor => {
        const match = findBlockMatch(editor, { format: 'footnote' })
        return match && match[0].content
      },
    },
  },
]
const blockButtons = [
  { value: 'unordered-list', Component: UnorderedListButton },
  { value: 'ordered-list', Component: OrderedListButton },
  {
    value: 'align-left',
    Component: AlignLeftButton,
  },
  {
    value: 'align-center',
    Component: AlignCenterButton,
  },
  {
    value: 'align-right',
    Component: AlignRightButton,
  },
  {
    value: 'align-justify',
    Component: AlignJustifyButton,
  },
  {
    value: 'block-quote',
    Component: QuoteButton,
  },
  {
    value: 'heading-one',
    Component: HeadingButton,
    headingType: 1,
  },
  {
    value: 'heading-two',
    Component: HeadingButton,
    headingType: 2,
  },
  {
    value: 'heading-three',
    Component: HeadingButton,
    headingType: 3,
  },
  {
    value: 'columns',
    Component: ColumnsButton,
    children: [
      { type: 'column', children: [{ text: 'Pierwsza' }] },
      { type: 'column', children: [{ text: 'Druga' }] },
    ],
  },
]

const RichTextExample = () => {
  const [value, setValue] = useState(initialValue)
  const renderElement = useCallback(props => <Element {...props} />, [])
  const renderLeaf = useCallback(props => <Leaf {...props} />, [])
  const editor = useMemo(
    () => withCustomElements(withHistory(withReact(createEditor()))),
    []
  )

  return (
    <Slate editor={editor} value={value} onChange={value => setValue(value)}>
      <Toolbar>
        {inlineButtons.map(props => (
          <ToolbarButtonContainer
            key={props.value}
            isActiveChecker={isMarkActive}
            onToggle={toggleMark}
            {...props}
          />
        ))}
        {blockButtons.map(props => (
          <ToolbarButtonContainer
            key={props.value}
            isActiveChecker={isBlockActive}
            onToggle={toggleBlock}
            {...props}
          />
        ))}
      </Toolbar>
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
    </Slate>
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

export default RichTextExample
