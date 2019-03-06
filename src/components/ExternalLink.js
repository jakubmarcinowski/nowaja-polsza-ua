import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledLink = styled.a`
  transition: opacity ${({ theme }) => theme.animations.default};

  &:hover {
    opacity: 0.8;
  }
`

const ExternalLink = ({ className, url, sameCard, children }) => (
  <StyledLink
    href={url}
    target={sameCard ? '' : '_blank'}
    rel={sameCard ? '' : 'noopener noreferrer'}
    className={className}
  >
    {children}
  </StyledLink>
)

ExternalLink.propTypes = {
  url: PropTypes.string.isRequired,
  sameCard: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.any,
}

export default ExternalLink
