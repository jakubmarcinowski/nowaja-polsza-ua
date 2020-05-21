import React from 'react'
import MaterialToggleButton from '@material-ui/lab/ToggleButton'
import { ToolbarButtonType } from 'utils/types'

export const ToolbarButton = ({
  value,
  ariaLabel,
  isActive,
  onSelect,
  ...props
}) => (
  <MaterialToggleButton
    value={value}
    aria-label={ariaLabel}
    selected={isActive}
    onMouseDown={event => {
      event.preventDefault()
      onSelect()
    }}
    size="small"
    {...props}
  />
)

ToolbarButton.propTypes = ToolbarButtonType

export default ToolbarButton
