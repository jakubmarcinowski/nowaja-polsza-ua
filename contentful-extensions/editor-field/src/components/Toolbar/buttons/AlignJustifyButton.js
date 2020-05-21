import React from 'react'
import ToggleButton from './ToolbarButton'
import FormatAlignJustifyIcon from '@material-ui/icons/FormatAlignJustify'
import { ToggleButtonType } from 'utils/types'

const AlignJustifyButton = props => (
  <ToggleButton aria-label="justified" {...props}>
    <FormatAlignJustifyIcon />
  </ToggleButton>
)

AlignJustifyButton.propTypes = ToggleButtonType

export default AlignJustifyButton
