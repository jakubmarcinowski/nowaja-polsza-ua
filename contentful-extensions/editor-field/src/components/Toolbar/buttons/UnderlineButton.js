import React from 'react'
import ToggleButton from './ToolbarButton'
import FormatUnderlined from '@material-ui/icons/FormatUnderlined'
import { ToggleButtonType } from 'utils/types'

const UnderlineButton = props => (
  <ToggleButton aria-label="underlined" {...props}>
    <FormatUnderlined />
  </ToggleButton>
)

UnderlineButton.propTypes = ToggleButtonType

export default UnderlineButton
