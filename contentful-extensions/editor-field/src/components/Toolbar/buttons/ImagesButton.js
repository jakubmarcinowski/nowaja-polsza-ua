import React, { forwardRef } from 'react'
import ImageIcon from '@material-ui/icons/Image'
import ToggleButton from './ToolbarButton'
import { ToggleButtonType } from 'utils/types'

const ImagesButton = forwardRef(function ImagesButton(props, ref) {
  return (
    <ToggleButton aria-label="bold" {...props} ref={ref}>
      <ImageIcon />
    </ToggleButton>
  )
})

ImagesButton.propTypes = ToggleButtonType

export default ImagesButton
