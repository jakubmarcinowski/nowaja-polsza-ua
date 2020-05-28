import React, { forwardRef } from 'react'
import ToggleButton from './ToolbarButton'
import FormatAlignRightIcon from '@material-ui/icons/FormatAlignRight'
import { ToggleButtonType } from 'utils/types'

const AlignRightButton = forwardRef(function AlignRightButton(props, ref) {
  return (
    <ToggleButton aria-label="right aligned" {...props} ref={ref}>
      <FormatAlignRightIcon />
    </ToggleButton>
  )
})

AlignRightButton.propTypes = ToggleButtonType

export default AlignRightButton
