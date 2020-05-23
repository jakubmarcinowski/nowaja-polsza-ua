import React from 'react'
import ToggleButton from './ToolbarButton'
import ViewColumnIcon from '@material-ui/icons/ViewColumn'
import { ToggleButtonType } from 'utils/types'

const ColumnsButton = props => (
  <ToggleButton aria-label="bold" {...props}>
    <ViewColumnIcon />
  </ToggleButton>
)

ColumnsButton.propTypes = ToggleButtonType

export default ColumnsButton
