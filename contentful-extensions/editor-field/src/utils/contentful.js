export const buildImageFluid = ({ url, width, height, maxWidth = 992 }) => {
  const aspectRatio = width / height
  const presentationWidth = Math.min(maxWidth, width)
  const presentationHeight = Math.round(presentationWidth * (height / width))
  const sizes = `(max-width: ${presentationWidth}px) 100vw, ${presentationWidth}px`

  const images = []

  images.push(width / 4)
  images.push(width / 2)
  images.push(width)
  images.push(width * 1.5)
  images.push(width * 2)
  images.push(width * 3)

  const filteredSizes = images.filter(size => size < width)

  filteredSizes.push(width)

  const srcSet = filteredSizes
    .map(size => `${url}?w=${Math.round(size)} ${Math.round(size)}w`)
    .join(`,\n`)

  // const webpSrcSet = filteredSizes
  //   .map(size => `${url}?fm=webp&w=${Math.round(size)} ${Math.round(size)}w`)
  //   .join(`,\n`)

  return {
    aspectRatio,
    src: url,
    sizes,
    srcSet,
    presentationWidth,
    presentationHeight,
  }
}

export const isContentful = !!process.env.IS_CONTENTFUL

export const onContentful = fn => isContentful && fn()

export const getValueFromSdk = sdk =>
  sdk.parameters.invocation?.initValue ||
  (sdk.field?.getValue()?.json && JSON.parse(sdk.field?.getValue()?.json)) ||
  null

export const isFullscreen = sdk => isContentful && !!sdk.parameters.invocation

export const toggleFullscreen = (sdk, { isFullscreen, value, setValue }) => {
  if (!isContentful) {
    return
  }
  if (isFullscreen) {
    console.log({ value })
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
  sdk.dialogs.selectSingleAsset().then(imgData => {
    if (imgData) {
      const file = Object.values(imgData.fields.file)[0]
      const { width, height } = file.details.image

      return { url: `https:${file.url}`, width, height }
    }
    return null
  })

export const updateEditorHeight = (sdk, isFullscreen) => {
  if (isFullscreen) {
    sdk.window.updateHeight(window.screen.availHeight - 230)
  } else {
    sdk.window.updateHeight(550)
  }
}

export const saveValue = (sdk, value) => {
  sdk.field?.setValue({ json: JSON.stringify(value) })
}
