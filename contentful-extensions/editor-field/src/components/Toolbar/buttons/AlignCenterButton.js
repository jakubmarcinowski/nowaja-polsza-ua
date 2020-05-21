import React from 'react'
import ToggleButton from './ToolbarButton'
import FormatAlignCenterIcon from '@material-ui/icons/FormatAlignCenter'
import { ToggleButtonType } from 'utils/types'

const AlignCenterButton = props => (
  <ToggleButton aria-label="center aligned" {...props}>
    <FormatAlignCenterIcon />
  </ToggleButton>
)

AlignCenterButton.propTypes = ToggleButtonType

export default AlignCenterButton
