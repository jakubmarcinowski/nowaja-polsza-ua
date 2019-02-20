import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { childrenType } from '../types/children'

//Todo Button refactor (to be like Header or Paragraph)

const StyledButton = styled.button`
  padding: ${props => (props.size === 'large' ? '1rem 6rem' : '1rem 3rem')};
  transition: background-color ${props => props.theme.animations.default};
  border: 1px solid ${props => props.theme.colors.black};
  background-color: ${props => props.theme.colors.white};
  cursor: pointer;
  font-size: ${props => (props.size === 'large' ? '2.2rem' : '1.2rem')};
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-weight: bold;

  &:hover {
    background-color: ${props => props.theme.colors.greyLight};
  }

  &:focus {
    outline: none;
  }
`

const Button = ({ children, onBtnClick, size }) => (
  <StyledButton size={size} onClick={onBtnClick}>
    {children}
  </StyledButton>
)

Button.defaultProps = {
  size: 'default',
}

Button.propTypes = {
  children: childrenType.isRequired,
  onBtnClick: PropTypes.func.isRequired,
  size: PropTypes.string,
}

export default Button
