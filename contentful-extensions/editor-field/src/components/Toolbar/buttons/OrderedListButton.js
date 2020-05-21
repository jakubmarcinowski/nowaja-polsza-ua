import React from 'react'
import ToggleButton from './ToolbarButton'
import FormatListNumbered from '@material-ui/icons/FormatListNumbered'
import { ToggleButtonType } from 'utils/types'

const OrderedListButton = props => (
  <ToggleButton aria-label="ordered list" {...props}>
    <FormatListNumbered />
  </ToggleButton>
)

OrderedListButton.propTypes = ToggleButtonType

export default OrderedListButton
