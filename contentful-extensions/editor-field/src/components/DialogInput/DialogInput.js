import React, { useState, useCallback } from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import TextField from '@material-ui/core/TextField'

const DialogInput = ({ onConfirm, open, title, initValue, label }) => {
  const [value, setValue] = useState(initValue)
  const onChange = useCallback(event => setValue(event.target.value))

  return (
    <Dialog open={open} aria-labelledby="form-dialog-title" fullWidth>
      <DialogTitle id="form-dialog-title">{title}</DialogTitle>
      <DialogContent>
        <DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            label={label}
            type="text"
            value={value}
            onChange={onChange}
            fullWidth
            multiline
          />
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => onConfirm(value)} color="primary">
          Zapisz
        </Button>
      </DialogActions>
    </Dialog>
  )
}

DialogInput.propTypes = {
  onConfirm: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  initValue: PropTypes.string,
  label: PropTypes.string,
}

export default DialogInput
