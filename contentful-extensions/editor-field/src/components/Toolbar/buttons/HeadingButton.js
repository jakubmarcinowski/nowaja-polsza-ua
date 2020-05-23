import React from 'react'
import PropTypes from 'prop-types'
import ToggleButton from './ToolbarButton'
import { ToggleButtonType } from 'utils/types'

const HeadingButton = ({ headingType, ...props }) => (
  <ToggleButton aria-label={`heading ${headingType}`} {...props}>
    H{headingType}
  </ToggleButton>
)

HeadingButton.propTypes = {
  ...ToggleButtonType,
  headingType: PropTypes.oneOf([1, 2, 3]),
}

export default HeadingButton
