import React, { forwardRef } from 'react'
import MaterialToggleButton from '@material-ui/lab/ToggleButton'
import { ToolbarButtonType } from 'utils/types'

export const ToolbarButton = forwardRef(function ToolbarButton(
  { value, ariaLabel, isActive, onSelect, ...props },
  ref
) {
  return (
    <MaterialToggleButton
      value={value}
      aria-label={ariaLabel}
      selected={isActive}
      onMouseDown={event => {
        event.preventDefault()
        onSelect()
      }}
      size="small"
      ref={ref}
      {...props}
    />
  )
})

ToolbarButton.propTypes = ToolbarButtonType

export default ToolbarButton
