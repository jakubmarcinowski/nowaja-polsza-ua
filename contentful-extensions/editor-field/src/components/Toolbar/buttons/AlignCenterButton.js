import React, { forwardRef } from 'react'
import ToggleButton from './ToolbarButton'
import FormatAlignCenterIcon from '@material-ui/icons/FormatAlignCenter'
import { ToggleButtonType } from 'utils/types'

const AlignCenterButton = forwardRef(function AlignCenterButton(props, ref) {
  return (
    <ToggleButton aria-label="center aligned" {...props} ref={ref}>
      <FormatAlignCenterIcon />
    </ToggleButton>
  )
})

AlignCenterButton.propTypes = ToggleButtonType

export default AlignCenterButton
