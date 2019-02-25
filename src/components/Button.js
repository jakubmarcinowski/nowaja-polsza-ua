import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { childrenType } from '../types/children'
import { mediaQueries } from '../utils/mediaQueries'

//Todo Button refactor (to be like Header or Paragraph)

const StyledButton = styled.button`
  padding: 1rem 3rem;
  transition: all ${props => props.theme.animations.default};
  border: 1px solid ${props => props.theme.colors.black};
  background-color: ${props => props.theme.colors.white};
  cursor: pointer;
  font-size: ${props => (props.size === 'large' ? '1.8rem' : '1rem')};
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-weight: 700;

  @media ${mediaQueries.tablet} {
    padding: ${props => (props.size === 'large' ? '1rem 6rem' : '1rem 3rem')};
    font-size: ${props => (props.size === 'large' ? '2.2rem' : '1.2rem')};
  }

  &:hover {
    background-color: ${props => props.theme.colors.black};
    color: ${props => props.theme.colors.white};
  }

  &:focus {
    outline: none;
  }
`

const Button = ({ className, children, onBtnClick, size }) => (
  <StyledButton className={className} size={size} onClick={onBtnClick}>
    {children}
  </StyledButton>
)

Button.defaultProps = {
  size: 'default',
}

Button.propTypes = {
  className: PropTypes.string,
  children: childrenType.isRequired,
  onBtnClick: PropTypes.func,
  size: PropTypes.string,
}

export default Button
