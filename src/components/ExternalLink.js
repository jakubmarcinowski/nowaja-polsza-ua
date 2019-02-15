import React from 'react'
import PropTypes from 'prop-types'

const ExternalLink = ({ url, sameCard, children }) => (
  <a
    href={url}
    target={sameCard ? '' : '_blank'}
    rel={sameCard ? '' : 'noopener noreferrer'}
  >
    {children}
  </a>
)

ExternalLink.propTypes = {
  url: PropTypes.string.isRequired,
  sameCard: PropTypes.bool,
  children: PropTypes.any,
}

export default ExternalLink
