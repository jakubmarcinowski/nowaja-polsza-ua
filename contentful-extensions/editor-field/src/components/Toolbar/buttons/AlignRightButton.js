import React from 'react'
import ToggleButton from './ToolbarButton'
import FormatAlignRightIcon from '@material-ui/icons/FormatAlignRight'
import { ToggleButtonType } from 'utils/types'

const AlignRightButton = props => (
  <ToggleButton aria-label="right aligned" {...props}>
    <FormatAlignRightIcon />
  </ToggleButton>
)

AlignRightButton.propTypes = ToggleButtonType

export default AlignRightButton
