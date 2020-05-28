import React, { forwardRef } from 'react'
import ToggleButton from './ToolbarButton'
import FormatAlignJustifyIcon from '@material-ui/icons/FormatAlignJustify'
import { ToggleButtonType } from 'utils/types'

const AlignJustifyButton = forwardRef(function AlignJustifyButton(props, ref) {
  return (
    <ToggleButton aria-label="justified" {...props} ref={ref}>
      <FormatAlignJustifyIcon />
    </ToggleButton>
  )
})

AlignJustifyButton.propTypes = ToggleButtonType

export default AlignJustifyButton
