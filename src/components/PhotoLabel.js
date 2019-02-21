import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { childrenType } from '../types/children'

const Label = styled.div`
  position: absolute;
  top: 7px;
  left: -3px;
  display: block;
  padding: 0.5rem;
  transition: opacity ${props => props.theme.animations.default};
  background: ${({ theme, color }) =>
    theme.colors.highlighted[color] || theme.colors.dark};
  color: ${props => props.theme.colors.white};

  &:hover {
    opacity: 0.9;
  }
`

const PhotoLabel = ({ color, children }) => (
  <Label color={color}>{children}</Label>
)

PhotoLabel.propTypes = {
  children: childrenType.isRequired,
  color: PropTypes.string,
}

export default PhotoLabel
