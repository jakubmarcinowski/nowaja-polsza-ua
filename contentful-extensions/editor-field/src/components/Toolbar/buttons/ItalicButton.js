import React from 'react'
import ToggleButton from './ToolbarButton'
import FormatItalicIcon from '@material-ui/icons/FormatItalic'
import { ToggleButtonType } from 'utils/types'

const ItalicButton = props => (
  <ToggleButton aria-label="italic" {...props}>
    <FormatItalicIcon />
  </ToggleButton>
)

ItalicButton.propTypes = ToggleButtonType

export default ItalicButton
