import React, { forwardRef } from 'react'
import ToggleButton from './ToolbarButton'
import { useSlate } from 'slate-react'
import LinkIcon from '@material-ui/icons/Link'
import { isLinkActive } from 'utils/editor'
import { ToggleButtonType } from 'utils/types'

const LinkButton = forwardRef(function LinkButton(props, ref) {
  const editor = useSlate()
  return (
    <ToggleButton
      selected={isLinkActive(editor)}
      aria-label="link"
      {...props}
      ref={ref}
    >
      <LinkIcon />
    </ToggleButton>
  )
})

LinkButton.propTypes = ToggleButtonType

export default LinkButton
