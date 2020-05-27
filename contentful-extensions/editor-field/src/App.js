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
  const isFullscreen = isContentful && !!sdk.parameters.invocation

  const toggleFullscreen = () => {
    if (!isContentful) {
      return
    }
    if (isFullscreen) {
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
    onContentful(() => {
      if (isFullscreen) {
        sdk.window.updateHeight(window.screen.availHeight - 230)
      } else {
        sdk.window.updateHeight(550)
      }
    })
  }, [])
  useEffect(() => {
    onContentful(() => sdk.field?.setValue(JSON.stringify(currentValue)))
  }, [currentValue])

  return (
    <div className="container">
      <Editor
        value={currentValue}
        valueChanged={setCurrentValue}
        isFullscreen={isFullscreen}
        toggleFullscreen={toggleFullscreen}
      />
    </div>
  )
}

const testInitialValue = [
  { type: 'heading-one', children: [{ text: 'Война на два фронта' }] },
  {
    type: 'paragraph',
    children: [
      {
        text:
          '17 сентября 1939 года Советский Союз напал на Польшу, которая на тот момент еще сражалась ',
      },
      { text: 'нацистской Германией. ', bold: true },
      {
        type: 'footnote',
        children: [{ text: '[1]' }],
        content:
          'Польским военным предписывалось по возможности уходить за границу с тактической целью — перегруппировать войска в ожидании помощи западных стран.',
      },
    ],
  },
  {
    children: [
      { text: 'Между Краковом, Римом и Москвой. Русская идея в новой Польше' },
    ],
    type: 'link',
    url:
      'https://assets.ctfassets.net/8uskgiwtlhdi/4ogRSdm6fBVhprKAe7ctLX/ad95fe1d6de8186be2848fe05938048c/_______________________________________________.pdf',
  },
  {
    type: 'block-quote',
    children: [
      {
        text:
          '17 сентября 1939 года верховный главнокомандующий Польши, генерал Эдвард Рыдз-Смиглы, отдал приказ не вести военных действий против СССР (за исключением ситуаций, когда красноармейцы пытаются разоружить польских солдат).',
      },
    ],
  },
  {
    type: 'images',
    children: [
      {
        text: 'Test GIF',
      },
    ],
    content:
      'https://pro2-bar-s3-cdn-cf6.myportfolio.com/c387f1e20da1b75ea57cae47d919119c/76241638-6cbc-471a-bb70-f4787367d98c_rw_1200.gif',
  },
  {
    type: 'ordered-list',
    children: [
      {
        type: 'list-item',
        children: [{ text: 'First' }],
      },
      {
        type: 'list-item',
        children: [{ text: 'Second' }],
      },
      {
        type: 'list-item',
        children: [{ text: 'Third' }],
      },
    ],
  },
  {
    type: 'unordered-list',
    children: [
      {
        type: 'list-item',
        children: [{ text: 'First' }],
      },
      {
        type: 'list-item',
        children: [{ text: 'Second' }],
      },
      {
        type: 'list-item',
        children: [{ text: 'Third' }],
      },
    ],
  },
  {
    type: 'columns',
    children: [
      {
        type: 'column',
        children: [
          {
            text:
              'Польская история рушится обвалом\nПод гром «лесоповала» вдали за Уралом.',
          },
        ],
      },
      {
        type: 'column',
        children: [
          {
            text:
              'Kiedy o świcie w polską historię się wali\nGrzmotem «lesopowalu» drzewo za Uralem.',
          },
        ],
      },
    ],
  },
  {
    type: 'youtube',
    children: [{ text: 'Testowy tytuł youtube' }],
    content: 'h9ZQElA1LjQ',
  },
  {
    type: 'soundcloud',
    children: [{ text: 'Testowy tytuł soundcloud' }],
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
