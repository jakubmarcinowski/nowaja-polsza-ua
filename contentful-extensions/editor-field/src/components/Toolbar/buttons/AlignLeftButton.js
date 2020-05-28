import React, { forwardRef } from 'react'
import ToggleButton from './ToolbarButton'
import FormatAlignLeftIcon from '@material-ui/icons/FormatAlignLeft'
import { ToggleButtonType } from 'utils/types'

const AlignLeftButton = forwardRef(function AlignLeftButton(props, ref) {
  return (
    <ToggleButton aria-label="right aligned" {...props} ref={ref}>
      <FormatAlignLeftIcon />
    </ToggleButton>
  )
})

AlignLeftButton.propTypes = ToggleButtonType

export default AlignLeftButton
