import PropTypes from 'prop-types'

export const ToolbarButtonType = {
  value: PropTypes.string.isRequired,
  ariaLabel: PropTypes.string,
  isActive: PropTypes.bool.isRequired,
  onSelect: PropTypes.func.isRequired,
}
