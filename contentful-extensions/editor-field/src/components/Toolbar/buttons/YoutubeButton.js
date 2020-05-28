import React, { forwardRef } from 'react'
import ToggleButton from './ToolbarButton'
import YouTubeIcon from '@material-ui/icons/YouTube'
import { ToggleButtonType } from 'utils/types'

const YoutubeButton = forwardRef(function YoutubeButton(props, ref) {
  return (
    <ToggleButton aria-label="youtube" {...props} ref={ref}>
      <YouTubeIcon />
    </ToggleButton>
  )
})

YoutubeButton.propTypes = ToggleButtonType

export default YoutubeButton
