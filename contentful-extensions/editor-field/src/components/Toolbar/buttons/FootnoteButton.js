import React, { forwardRef } from 'react'
import ToggleButton from './ToolbarButton'
import { ToggleButtonType } from 'utils/types'

const FootnoteButton = forwardRef(function FootnoteButton(props, ref) {
  return (
    <ToggleButton aria-label="footnote" {...props} ref={ref}>
      [1]
    </ToggleButton>
  )
})

FootnoteButton.propTypes = ToggleButtonType

export default FootnoteButton
