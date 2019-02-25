import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { childrenType } from '../types/children'

const StyledLabel = styled.div`
  display: block;
  padding: 0.5rem 1rem;
  transition: opacity ${props => props.theme.animations.default};
  background: ${({ theme, color }) =>
    theme.colors.highlighted[color] || theme.colors[color]};
  color: ${props => props.theme.colors.white};

  &:hover {
    opacity: 0.9;
  }
`

const Label = ({ color, children }) => (
  <StyledLabel color={color}>{children}</StyledLabel>
)

Label.propTypes = {
  children: childrenType.isRequired,
  color: PropTypes.string,
}

export default Label
