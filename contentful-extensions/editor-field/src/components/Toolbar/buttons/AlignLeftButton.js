import React from 'react'
import ToggleButton from './ToolbarButton'
import FormatAlignLeftIcon from '@material-ui/icons/FormatAlignLeft'
import { ToggleButtonType } from 'utils/types'

const AlignLeftButton = props => (
  <ToggleButton aria-label="right aligned" {...props}>
    <FormatAlignLeftIcon />
  </ToggleButton>
)

AlignLeftButton.propTypes = ToggleButtonType

export default AlignLeftButton
