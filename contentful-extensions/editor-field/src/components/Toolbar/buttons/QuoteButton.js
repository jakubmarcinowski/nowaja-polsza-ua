import React, { forwardRef } from 'react'
import ToggleButton from './ToolbarButton'
import FormatQuoteIcon from '@material-ui/icons/FormatQuote'
import { ToggleButtonType } from 'utils/types'

const QuoteButton = forwardRef(function QuoteButton(props, ref) {
  return (
    <ToggleButton aria-label="quotation" {...props} ref={ref}>
      <FormatQuoteIcon />
    </ToggleButton>
  )
})

QuoteButton.propTypes = ToggleButtonType

export default QuoteButton
