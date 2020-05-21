import React from 'react'
import PropTypes from 'prop-types'
import ToggleButton from './ToolbarButton'
import { ToggleButtonType } from 'utils/types'

const HeadingButton = ({ type, ...props }) => (
  <ToggleButton aria-label={`heading ${type}`} {...props}>
    H{type}
  </ToggleButton>
)

HeadingButton.propTypes = {
  ...ToggleButtonType,
  type: PropTypes.oneOf([1, 2, 3]),
}

export default HeadingButton
