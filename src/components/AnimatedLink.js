import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { childrenType } from 'types/children'

const StyledLink = styled(Link)`
  transition: opacity ${({ theme }) => theme.animations.default};

  &:hover {
    opacity: ${({ opacity }) => opacity};
  }
`

const AnimatedLink = ({ children, opacity, url }) => (
  <StyledLink
    to={url}
    opacity={opacity}
    title={children}
    activeStyle={{ textDecoration: 'underline' }}
  >
    {children}
  </StyledLink>
)

AnimatedLink.defaultProps = {
  opacity: 0.8,
}

AnimatedLink.propTypes = {
  children: childrenType,
  opacity: PropTypes.number,
  url: PropTypes.string,
}

export default AnimatedLink
