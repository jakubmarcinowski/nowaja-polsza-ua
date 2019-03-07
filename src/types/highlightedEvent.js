import PropTypes from 'prop-types'

export const highlightedEventType = PropTypes.shape({
  id: PropTypes.string,
  title: PropTypes.string,
  expirationDay: PropTypes.string,
  expirationMonth: PropTypes.string,
  city: PropTypes.string,
})
