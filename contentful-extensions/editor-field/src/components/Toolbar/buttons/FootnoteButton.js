import React from 'react'
import ToggleButton from './ToolbarButton'
import { ToggleButtonType } from 'utils/types'

const FootnoteButton = props => (
  <ToggleButton aria-label="footnote" {...props}>
    [1]
  </ToggleButton>
)

FootnoteButton.propTypes = ToggleButtonType

export default FootnoteButton
