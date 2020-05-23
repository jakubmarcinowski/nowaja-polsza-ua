import React, { forwardRef } from 'react'
import ToggleButton from './ToolbarButton'
import ViewColumnIcon from '@material-ui/icons/ViewColumn'
import { ToggleButtonType } from 'utils/types'

const ColumnsButton = forwardRef(function ColumnsButton(props, ref) {
  return (
    <ToggleButton aria-label="bold" {...props} ref={ref}>
      <ViewColumnIcon />
    </ToggleButton>
  )
})

ColumnsButton.propTypes = ToggleButtonType

export default ColumnsButton
