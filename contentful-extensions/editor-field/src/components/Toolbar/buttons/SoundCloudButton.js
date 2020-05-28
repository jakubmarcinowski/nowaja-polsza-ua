import React, { forwardRef } from 'react'
import ToggleButton from './ToolbarButton'
import EqualizerIcon from '@material-ui/icons/Equalizer'
import { ToggleButtonType } from 'utils/types'

const SoundCloudButton = forwardRef(function SoundCloudButton(props, ref) {
  return (
    <ToggleButton aria-label="soundcloud" {...props} ref={ref}>
      <EqualizerIcon />
    </ToggleButton>
  )
})

SoundCloudButton.propTypes = ToggleButtonType

export default SoundCloudButton
