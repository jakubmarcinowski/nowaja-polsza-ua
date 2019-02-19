import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { theme } from '../utils/theme'

const Header = ({ className, children, type, color, size, weight }) => (
  <HeaderStyled
    as={`h${type}`}
    color={color}
    size={size}
    weight={weight}
    className={className}
  >
    {children}
  </HeaderStyled>
)

Header.defaultProps = {
  size: 'Medium',
  color: 'Primary',
  type: 1,
  weight: 'Normal',
}

Header.weights = {
  Bold: 'Bold',
  BoldMedium: 'BoldMedium',
  SemiBold: 'SemiBold',
  Light: 'Light',
  Normal: 'Normal',
}

Header.colors = {
  Primary: 'Primary',
}

Header.sizes = {
  Big: 'Big',
  Medium: 'Medium',
  MediumSmall: 'MediumSmall',
  Small: 'Small',
  ExtraSmall: 'ExtraSmall',
}

const fontWeightMap = {
  [Header.weights.Bold]: 'bold',
  [Header.weights.BoldMedium]: 600,
  [Header.weights.SemiBold]: 500,
  [Header.weights.Light]: 300,
  [Header.weights.Normal]: 'normal',
}

const fontSizeMap = {
  [Header.sizes.Big]: 2.5,
  [Header.sizes.Medium]: 1.6,
  [Header.sizes.MediumSmall]: 1.4,
  [Header.sizes.Small]: 1.2,
  [Header.sizes.ExtraSmall]: 1.0,
}

const colorMap = () => ({
  [Header.colors.Primary]: theme.colors.primary,
})

const HeaderStyled = styled.h1`
  line-height: 1.2;
  color: ${({ color }) => colorMap(theme)[color] || theme.text.colors[0]};
  font-size: ${({ size }) => fontSizeMap[size]}rem;
  font-weight: ${({ weight }) => fontWeightMap[weight]};
`

Header.propTypes = {
  type: PropTypes.number,
  color: PropTypes.string,
  size: PropTypes.string,
  weight: PropTypes.string,
  children: PropTypes.string,
}

export default Header
