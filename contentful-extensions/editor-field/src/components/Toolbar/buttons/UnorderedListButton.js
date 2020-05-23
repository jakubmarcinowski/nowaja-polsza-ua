import React, { forwardRef } from 'react'
import ToggleButton from './ToolbarButton'
import FormatListBulleted from '@material-ui/icons/FormatListBulleted'
import { ToggleButtonType } from 'utils/types'

const UnorderedListButton = forwardRef(function UnorderedListButton(
  props,
  ref
) {
  return (
    <ToggleButton aria-label="ordered list" {...props} ref={ref}>
      <FormatListBulleted />
    </ToggleButton>
  )
})

UnorderedListButton.propTypes = ToggleButtonType

export default UnorderedListButton
