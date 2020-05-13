import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { childrenType } from 'types/children'
import { mediaQueries } from 'utils/mediaQueries'

//Todo Button refactor (to be like Header or Paragraph)

const StyledButton = styled.button`
  padding: 1rem 3rem;
  transition: all ${props => props.theme.animations.default};
  border: 1px solid ${props => props.theme.colors.black};
  background-color: ${props => props.theme.colors.white};
  cursor: pointer;
  font-size: ${props => fontSizesMobile[props.size]};
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-weight: ${props => fontWeights[props.size]};

  @media ${mediaQueries.tablet} {
    padding: ${props => paddingsTablet[props.size]};
    font-size: ${props => fontSizesTablet[props.size]};
  }

  &:hover {
    background-color: ${props => props.theme.colors.black};
    color: ${props => props.theme.colors.white};
  }

  &:focus {
    outline: none;
  }
`

const Button = ({ className, children, onClick, size }) => (
  <StyledButton className={className} size={size} onClick={onClick}>
    {children}
  </StyledButton>
)

Button.sizes = {
  Small: 'small',
  Medium: 'medium',
  Large: 'large',
}

const fontWeights = {
  [Button.sizes.Small]: 600,
  [Button.sizes.Medium]: 400,
  [Button.sizes.Large]: 700,
}

const fontSizesMobile = {
  [Button.sizes.Small]: '1rem',
  [Button.sizes.Medium]: '1.2rem',
  [Button.sizes.Large]: '1.8rem',
}

const fontSizesTablet = {
  [Button.sizes.Small]: '1.2rem',
  [Button.sizes.Medium]: '1.4rem',
  [Button.sizes.Large]: '2rem',
}

const paddingsTablet = {
  [Button.sizes.Small]: '1rem 3rem',
  [Button.sizes.Medium]: '1.4rem 2rem',
  [Button.sizes.Large]: '1rem 4rem',
}

Button.defaultProps = {
  size: Button.sizes.Small,
}

Button.propTypes = {
  className: PropTypes.string,
  children: childrenType.isRequired,
  onClick: PropTypes.func,
  size: PropTypes.string,
}

export default Button
