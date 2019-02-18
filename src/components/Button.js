import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { childrenType } from '../types/children'

const StyledButton = styled.button`
  transition: background-color ${props => props.theme.animations.duration} ease;
  padding: ${props => (props.size === 'large' ? '1.4rem' : '1.2rem')};
  border: 1px solid ${props => props.theme.colors.black};
  background-color: #fff;
  cursor: pointer;
  font-size: ${props => (props.size === 'large' ? '2.2rem' : '1.2rem')};

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }

  &:focus {
    outline: none;
  }
`

const Button = ({ children, onBtnClick, size }) => {
  return (
    <StyledButton size={size} onClick={onBtnClick}>
      {children}
    </StyledButton>
  )
}

Button.propTypes = {
  children: childrenType,
  onBtnClick: PropTypes.func,
  size: PropTypes.string,
}

export default Button
