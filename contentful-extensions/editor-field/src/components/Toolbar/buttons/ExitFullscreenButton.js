import React, { forwardRef } from 'react'
import ToggleButton from './ToolbarButton'
import FullscreenExitIcon from '@material-ui/icons/FullscreenExit'
import { ToggleButtonType } from 'utils/types'

const ExitFullscreenButton = forwardRef(function ExitFullscreenButton(
  props,
  ref
) {
  return (
    <ToggleButton aria-label="fullscreen" {...props} ref={ref}>
      <FullscreenExitIcon />
    </ToggleButton>
  )
})

ExitFullscreenButton.propTypes = ToggleButtonType

export default ExitFullscreenButton
