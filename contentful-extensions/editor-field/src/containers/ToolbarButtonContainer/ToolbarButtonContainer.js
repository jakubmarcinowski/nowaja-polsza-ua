import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useSlate } from 'slate-react'
import Tooltip from '@material-ui/core/Tooltip'
import { DialogInput } from 'components'

const ToolbarButtonContainer = ({
  value,
  Component,
  dialog,
  isActiveChecker,
  onToggle,
  ...other
}) => {
  const editor = useSlate()
  const [dialogOpen, setDialogOpen] = useState(false)
  const [anchorPoint, setAnchorPoint] = useState(null)

  return (
    <>
      <Tooltip
        title={value}
        aria-label={value}
        placement="bottom"
        enterTouchDelay={1500}
        enterNextDelay={500}
      >
        <Component
          value={value}
          isActive={isActiveChecker(editor, value)}
          onSelect={() => {
            if (dialog) {
              setAnchorPoint(editor.selection.anchor)
              setDialogOpen(true)
            } else {
              onToggle(editor, { format: value, ...other })
            }
          }}
          {...other}
        />
      </Tooltip>
      {dialogOpen && (
        <DialogInput
          {...dialog}
          onConfirm={dialogValue => {
            onToggle(editor, {
              format: value,
              at: anchorPoint,
              props: { content: dialogValue },
            })
            setDialogOpen(false)
          }}
          initValue={dialog.getInitValue ? dialog.getInitValue(editor) : ''}
          open={true}
        />
      )}
    </>
  )
}

ToolbarButtonContainer.propTypes = {
  value: PropTypes.string.isRequired,
  Component: PropTypes.elementType.isRequired,
  onToggle: PropTypes.func.isRequired,
  isActiveChecker: PropTypes.func,
  dialog: PropTypes.object,
}

ToolbarButtonContainer.defaultProps = {
  isActiveChecker: () => false,
}

export default ToolbarButtonContainer
