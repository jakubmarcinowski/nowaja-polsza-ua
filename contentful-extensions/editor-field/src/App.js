import React, { useEffect, useState, useCallback } from 'react'
import ReactDOM from 'react-dom'
import './App.scss'
import { Editor } from 'containers'
import { init } from 'contentful-ui-extensions-sdk'
import * as contentfulUtils from 'utils/contentful'

const calculateInitValue = (candidate, sdk) =>
  candidate ||
  (contentfulUtils.isContentful && contentfulUtils.getValueFromSdk(sdk)) ||
  null

const App = ({ initialValue, sdk }) => {
  const [currentValue, setCurrentValue] = useState(
    calculateInitValue(initialValue, sdk)
  )
  const isFullscreen = contentfulUtils.isFullscreen(sdk)
  const pickImage = useCallback(() => contentfulUtils.pickImage(sdk), [])

  const toggleFullscreenMode = () => {
    contentfulUtils.toggleFullscreen(sdk, {
      isFullscreen,
      value: currentValue,
      setValue: setCurrentValue,
    })
  }

  useEffect(() => {
    contentfulUtils.onContentful(() =>
      contentfulUtils.updateEditorHeight(sdk, isFullscreen)
    )
  }, [])

  useEffect(() => {
    contentfulUtils.onContentful(() =>
      contentfulUtils.saveValue(sdk, currentValue)
    )
  }, [currentValue])

  return (
    <div className="container">
      <Editor
        value={currentValue}
        valueChanged={setCurrentValue}
        isFullscreen={isFullscreen}
        toggleFullscreen={toggleFullscreenMode}
        pickImage={contentfulUtils.isContentful ? pickImage : null}
        buildImageFluid={
          contentfulUtils.isContentful
            ? contentfulUtils.buildImageFluid
            : () => null
        }
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
      {
        type: 'link',
        url: 'https://en.wikipedia.org/wiki/Hypertext',
        children: [{ text: 'hyperlinks' }],
      },
      { text: 'нацистской Германией.  ', bold: true },
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

if (contentfulUtils.isContentful) {
  init(sdk => {
    ReactDOM.render(<App sdk={sdk} />, document.getElementById('app'))
  })
} else {
  ReactDOM.render(
    <App initialValue={testInitialValue} />,
    document.getElementById('app')
  )
}