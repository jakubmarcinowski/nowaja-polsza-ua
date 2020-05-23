import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import ToggleButton from './ToolbarButton'
import { ToggleButtonType } from 'utils/types'

const HeadingButton = forwardRef(function HeadingButton(
  { headingType, ...props },
  ref
) {
  return (
    <ToggleButton aria-label={`heading ${headingType}`} {...props} ref={ref}>
      H{headingType}
    </ToggleButton>
  )
})

HeadingButton.propTypes = {
  ...ToggleButtonType,
  headingType: PropTypes.oneOf([1, 2, 3]),
}

export default HeadingButton
