import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useSlate } from 'slate-react'
import Tooltip from '@material-ui/core/Tooltip'
import { DialogInput } from 'components'
import { isLinkActive, unwrapLink } from 'utils/editor'

const onSelectCustomAction = (
  buttonType,
  { editor, onToggle, pickImage, openDialog, value, dialog, buildImageFluid }
) => {
  switch (buttonType) {
    case 'images':
      if (pickImage) {
        return pickImage().then(image => {
          if (image) {
            const fluid = buildImageFluid(image)
            onToggle(editor, {
              format: value,
              at: editor.selection.anchor,
              props: { ...image, fluid },
            })
          }
        })
      } else {
        openDialog()
      }
      break
    case 'link':
      if (isLinkActive(editor)) {
        unwrapLink(editor)
      } else {
        openDialog()
      }
      break
    default:
      if (dialog) {
        openDialog()
      }
  }
}

const ToolbarButtonContainer = props => {
  const {
    value,
    Component,
    dialog,
    isActiveChecker,
    onToggle,
    tooltip,
    pickImage,
    buildImageFluid,
    ...other
  } = props
  const editor = useSlate()
  const [dialogOpen, setDialogOpen] = useState(false)
  const [anchorPoint, setAnchorPoint] = useState(null)
  return (
    <>
      <Tooltip
        title={tooltip || value}
        aria-label={tooltip || value}
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
              onSelectCustomAction(value, {
                ...props,
                editor,
                openDialog: () => setDialogOpen(true),
              })
            } else {
              onToggle(editor, {
                format: value,
                pickImage,
                buildImageFluid,
                ...other,
              })
            }
          }}
          {...other}
        />
      </Tooltip>
      {dialogOpen && (
        <DialogInput
          {...dialog}
          onConfirm={(dialogValue, selection) => {
            onToggle(editor, {
              format: value,
              at: anchorPoint,
              props: { content: dialogValue, selection },
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
  tooltip: PropTypes.string,
  isActiveChecker: PropTypes.func,
  pickImage: PropTypes.func,
  buildImageFluid: PropTypes.func,
  dialog: PropTypes.object,
}

ToolbarButtonContainer.defaultProps = {
  isActiveChecker: () => false,
}

export default ToolbarButtonContainer