import React, { forwardRef } from 'react'
import ToggleButton from './ToolbarButton'
import FullscreenIcon from '@material-ui/icons/Fullscreen'
import { ToggleButtonType } from 'utils/types'

const FullscreenButton = forwardRef(function FullscreenButton(props, ref) {
  return (
    <ToggleButton aria-label="fullscreen" {...props} ref={ref}>
      <FullscreenIcon />
    </ToggleButton>
  )
})

FullscreenButton.propTypes = ToggleButtonType

export default FullscreenButton
