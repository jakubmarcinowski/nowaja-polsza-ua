import React, { forwardRef } from 'react'
import ToggleButton from './ToolbarButton'
import ChatIcon from '@material-ui/icons/Chat'
import { ToggleButtonType } from 'utils/types'

const StatementButton = forwardRef(function StatementButton(props, ref) {
  return (
    <ToggleButton aria-label="statement" {...props} ref={ref}>
      <ChatIcon />
    </ToggleButton>
  )
})

StatementButton.propTypes = ToggleButtonType

export default StatementButton
