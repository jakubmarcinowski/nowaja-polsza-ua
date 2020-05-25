import React, { useEffect, useCallback } from 'react'
import ReactDOM from 'react-dom'
import './App.scss'
import { Editor } from 'containers'
import { init } from 'contentful-ui-extensions-sdk'

const isContentful = !!process.env.IS_CONTENTFUL
const onContentful = fn => isContentful && fn()
const getValueFromSdk = sdk =>
  sdk.parameters.invocation?.initValue ||
  (sdk.field && this.props.sdk.field?.getValue())

const App = ({ sdk }) => {
  let initValue = onContentful(getValueFromSdk(sdk))
  const valueChanged = useCallback(value =>
    onContentful(() => sdk.field?.setValue(JSON.stringify(value)))
  )
  const openFullscreen = useCallback(() => {
    sdk.dialogs.openExtension({
      width: 'fullWidth',
      shouldCloseOnEscapePress: true,
      shouldCloseOnOverlayClick: true,
      parameters: {
        initValue: sdk.field.getValue(),
      },
    })
  })
  useEffect(
    onContentful(() => sdk.window.startAutoResizer()),
    []
  )

  return (
    <div className="container">
      <Editor
        initValue={initValue && JSON.parse(initValue)}
        valueChanged={valueChanged}
      />
      {isContentful && <button onClick={openFullscreen}>Full screen</button>}
    </div>
  )
}

if (isContentful) {
  init(sdk => {
    ReactDOM.render(<App sdk={sdk} />, document.getElementById('app'))
  })
} else {
  ReactDOM.render(<App />, document.getElementById('app'))
}
