import React, { forwardRef } from 'react'
import ToggleButton from './ToolbarButton'
import FormatListNumbered from '@material-ui/icons/FormatListNumbered'
import { ToggleButtonType } from 'utils/types'

const OrderedListButton = forwardRef(function OrderedListButton(props, ref) {
  return (
    <ToggleButton aria-label="ordered list" {...props} ref={ref}>
      <FormatListNumbered />
    </ToggleButton>
  )
})

OrderedListButton.propTypes = ToggleButtonType

export default OrderedListButton
