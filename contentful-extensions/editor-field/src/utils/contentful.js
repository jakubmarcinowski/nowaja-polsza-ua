export const isContentful = !!process.env.IS_CONTENTFUL

export const onContentful = fn => isContentful && fn()

export const getValueFromSdk = sdk =>
  sdk.parameters.invocation?.initValue ||
  (sdk.field?.getValue() && JSON.parse(sdk.field.getValue())) ||
  null

export const isFullscreen = sdk => isContentful && !!sdk.parameters.invocation

export const toggleFullscreen = (sdk, { isFullscreen, value, setValue }) => {
  if (!isContentful) {
    return
  }
  if (isFullscreen) {
    sdk.close(value)
  } else {
    sdk.dialogs
      .openExtension({
        width: 'fullWidth',
        parameters: {
          initValue: value,
        },
      })
      .then(setValue)
  }
}

export const pickImage = sdk =>
  sdk.dialogs
    .selectSingleAsset()
    .then(imgData =>
      imgData ? `https://${Object.values(imgData.fields.file)[0].url}` : null
    )

export const updateEditorHeight = (sdk, isFullscreen) => {
  if (isFullscreen) {
    sdk.window.updateHeight(window.screen.availHeight - 230)
  } else {
    sdk.window.updateHeight(550)
  }
}

export const saveValue = (sdk, value) =>
  sdk.field?.setValue(JSON.stringify(value))
