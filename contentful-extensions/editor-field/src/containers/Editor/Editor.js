import React, { useCallback, useMemo, useState } from 'react'
import isHotkey from 'is-hotkey'
import { Editable, withReact, useSlate, Slate } from 'slate-react'
import { createEditor, Transforms, Editor, Range } from 'slate'
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
} from 'components'
import {
  isMarkActive,
  isBlockActive,
  toggleMark,
  toggleBlock,
} from 'utils/editor'
import QuoteButton from 'components/Toolbar/buttons/QuoteButton'
import FootnoteButton from 'components/Toolbar/buttons/FootnoteButton'

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
  { value: 'footnote', Component: FootnoteButton },
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
    type: 1,
  },
  {
    value: 'heading-two',
    Component: HeadingButton,
    type: 2,
  },
  {
    value: 'heading-three',
    Component: HeadingButton,
    type: 3,
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
          <InlineButtonWrapper key={props.value} {...props} />
        ))}
        {blockButtons.map(props => (
          <BlockButtonWrapper key={props.value} {...props} />
        ))}
      </Toolbar>
      <Editable
        renderElement={renderElement}
        renderLeaf={renderLeaf}
        placeholder="Enter some rich text…"
        spellCheck
        autoFocus
        onKeyDown={event => {
          for (const hotkey in HOTKEYS) {
            if (isHotkey(hotkey, event)) {
              event.preventDefault()
              const mark = HOTKEYS[hotkey]
              toggleMark(editor, mark)
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

const InlineButtonWrapper = ({ value, Component }) => {
  const editor = useSlate()
  return (
    <Component
      value={value}
      isActive={isMarkActive(editor, value)}
      onSelect={() => toggleMark(editor, value)}
    />
  )
}

const BlockButtonWrapper = ({ value, Component, ...props }) => {
  const editor = useSlate()
  return (
    <Component
      value={value}
      isActive={isBlockActive(editor, value)}
      onSelect={() => toggleBlock(editor, value)}
      {...props}
    />
  )
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
