import React, { forwardRef } from 'react'
import ToggleButton from './ToolbarButton'
import FormatItalicIcon from '@material-ui/icons/FormatItalic'
import { ToggleButtonType } from 'utils/types'

const ItalicButton = forwardRef(function ItalicButton(props, ref) {
  return (
    <ToggleButton aria-label="italic" {...props} ref={ref}>
      <FormatItalicIcon />
    </ToggleButton>
  )
})

ItalicButton.propTypes = ToggleButtonType

export default ItalicButton
