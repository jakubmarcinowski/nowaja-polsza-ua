import React from 'react'
import ToggleButton from './ToolbarButton'
import FormatQuoteIcon from '@material-ui/icons/FormatQuote'
import { ToggleButtonType } from 'utils/types'

const QuoteButton = props => (
  <ToggleButton aria-label="quotation" {...props}>
    <FormatQuoteIcon />
  </ToggleButton>
)

QuoteButton.propTypes = ToggleButtonType

export default QuoteButton
