import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledLink = styled.a`
  transition: opacity ${({ theme }) => theme.animations.default};

  &:hover {
    opacity: 0.8;
  }
`

const ExternalLink = ({ url, sameCard, children }) => (
  <StyledLink
    href={url}
    target={sameCard ? '' : '_blank'}
    rel={sameCard ? '' : 'noopener noreferrer'}
  >
    {children}
  </StyledLink>
)

ExternalLink.propTypes = {
  url: PropTypes.string.isRequired,
  sameCard: PropTypes.bool,
  children: PropTypes.any,
}

export default ExternalLink
