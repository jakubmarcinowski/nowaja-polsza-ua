import React from 'react'
import ToggleButton from './ToolbarButton'
import FormatBoldIcon from '@material-ui/icons/FormatBold'
import { ToggleButtonType } from 'utils/types'

const BoldButton = props => (
  <ToggleButton aria-label="bold" {...props}>
    <FormatBoldIcon />
  </ToggleButton>
)

BoldButton.propTypes = ToggleButtonType

export default BoldButton
