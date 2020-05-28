import React, { forwardRef } from 'react'
import ToggleButton from './ToolbarButton'
import FormatUnderlined from '@material-ui/icons/FormatUnderlined'
import { ToggleButtonType } from 'utils/types'

const UnderlineButton = forwardRef(function UnderlineButton(props, ref) {
  return (
    <ToggleButton aria-label="underlined" {...props} ref={ref}>
      <FormatUnderlined />
    </ToggleButton>
  )
})

UnderlineButton.propTypes = ToggleButtonType

export default UnderlineButton
