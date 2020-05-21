import React from 'react'
import ToggleButton from './ToolbarButton'
import FormatListBulleted from '@material-ui/icons/FormatListBulleted'
import { ToggleButtonType } from 'utils/types'

const UnorderedListButton = props => (
  <ToggleButton aria-label="ordered list" {...props}>
    <FormatListBulleted />
  </ToggleButton>
)

UnorderedListButton.propTypes = ToggleButtonType

export default UnorderedListButton
