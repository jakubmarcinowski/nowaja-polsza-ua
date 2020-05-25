import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import './App.scss'
import { Editor } from 'containers'
import { init } from 'contentful-ui-extensions-sdk'

const isContentful = !!process.env.IS_CONTENTFUL
const onContentful = fn => isContentful && fn()
const getValueFromSdk = sdk =>
  sdk.parameters.invocation?.initValue ||
  (sdk.field?.getValue() && JSON.parse(sdk.field.getValue())) ||
  null

const App = ({ initialValue, sdk }) => {
  const [currentValue, setCurrentValue] = useState(
    initialValue || (isContentful && getValueFromSdk(sdk)) || null
  )
  const toggleFullscreen = () => {
    const isInDialog = !!sdk.parameters.invocation
    if (isInDialog) {
      sdk.close(currentValue)
    } else {
      sdk.dialogs
        .openExtension({
          width: 'fullWidth',
          parameters: {
            initValue: currentValue,
          },
        })
        .then(setCurrentValue)
    }
  }
  useEffect(() => {
    onContentful(() => sdk.window.startAutoResizer())
  }, [])
  useEffect(() => {
    onContentful(() => sdk.field?.setValue(JSON.stringify(currentValue)))
  }, [currentValue])

  return (
    <div className="container">
      <Editor value={currentValue} valueChanged={setCurrentValue} />
      {isContentful && <button onClick={toggleFullscreen}>Full screen</button>}
    </div>
  )
}

const testInitialValue = [
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
  { children: [{ text: 'This is editable ' }], type: 'link', url: 'ac' },
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
    type: 'youtube',
    children: [{ text: 'abc' }],
    content: 'h9ZQElA1LjQ',
  },
  {
    type: 'soundcloud',
    children: [{ text: 'test soundcloud' }],
    content: 'user-261324975/sets/lofi',
  },
  {
    type: 'paragraph',
    children: [{ text: 'Try it out for yourself!' }],
  },
]

if (isContentful) {
  init(sdk => {
    ReactDOM.render(<App sdk={sdk} />, document.getElementById('app'))
  })
} else {
  ReactDOM.render(
    <App initialValue={testInitialValue} />,
    document.getElementById('app')
  )
}
