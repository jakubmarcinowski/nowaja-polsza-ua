import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useSlate } from 'slate-react'
import { DialogInput } from 'components'

const ToolbarButtonContainer = ({
  value,
  Component,
  dialog,
  isActiveChecker,
  onToggle,
}) => {
  const editor = useSlate()
  const [dialogOpen, setDialogOpen] = useState(false)
  const [anchorPoint, setAnchorPoint] = useState(null)
  console.log({ value, Component })

  return (
    <>
      <Component
        value={value}
        isActive={isActiveChecker(editor, value)}
        onSelect={() => {
          if (dialog) {
            setAnchorPoint(editor.selection.anchor)
            setDialogOpen(true)
          } else {
            onToggle(editor, { format: value })
          }
        }}
      />
      {dialog && (
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
          open={dialogOpen}
        />
      )}
    </>
  )
}

ToolbarButtonContainer.propTypes = {
  value: PropTypes.string.isRequired,
  Component: PropTypes.node.isRequired,
  isActiveChecker: PropTypes.func.isRequired,
  onToggle: PropTypes.func.isRequired,
  dialog: PropTypes.object,
}

export default ToolbarButtonContainer
