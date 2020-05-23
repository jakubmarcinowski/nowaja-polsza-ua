import React, { forwardRef } from 'react'
import ToggleButton from './ToolbarButton'
import FormatBoldIcon from '@material-ui/icons/FormatBold'
import { ToggleButtonType } from 'utils/types'

const BoldButton = forwardRef(function BoldButton(props, ref) {
  return (
    <ToggleButton aria-label="bold" {...props} ref={ref}>
      <FormatBoldIcon />
    </ToggleButton>
  )
})

BoldButton.propTypes = ToggleButtonType

export default BoldButton
