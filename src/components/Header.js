import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { theme } from '../utils/theme'
import { childrenType } from '../types/children'
import { mediaQueries } from '../utils/mediaQueries'

const Header = ({
  className,
  children,
  type,
  color,
  size,
  weight,
  margin,
  lineHeight,
}) => (
  <HeaderStyled
    as={`h${type}`}
    color={color}
    size={size}
    weight={weight}
    className={className}
    margin={margin}
    lineHeight={lineHeight}
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
  Light: 'Light',
  Normal: 'Normal',
}

Header.colors = {
  Primary: 'Primary',
  Dark: 'Dark',
  White: 'White',
}

Header.sizes = {
  Big: 'Big',
  MediumBig: 'MediumBig',
  Medium: 'Medium',
  MediumSmall: 'MediumSmall',
  Small: 'Small',
  ExtraSmall: 'ExtraSmall',
}

Header.lineHeight = {
  Big: 'Big',
  Medium: 'Medium',
  Small: 'Small',
}

const fontWeightMap = {
  [Header.weights.Bold]: 700,
  [Header.weights.Light]: 300,
  [Header.weights.Normal]: 400,
}

const fontSizeMap = {
  [Header.sizes.Big]: 2.5,
  [Header.sizes.MediumBig]: 2,
  [Header.sizes.Medium]: 1.6,
  [Header.sizes.MediumSmall]: 1.4,
  [Header.sizes.Small]: 1.2,
  [Header.sizes.ExtraSmall]: 1.0,
}

const lineHeightMap = {
  [Header.sizes.Big]: 1.6,
  [Header.sizes.Medium]: 1.4,
  [Header.sizes.Small]: 1.2,
}

const colorMap = () => ({
  [Header.colors.Primary]: theme.colors.primary,
  [Header.colors.Dark]: theme.colors.dark,
  [Header.colors.White]: theme.colors.white,
})

const HeaderStyled = styled.h1`
  margin: ${({ margin }) => margin};
  line-height: ${({ lineHeight }) => lineHeightMap[lineHeight]};
  color: ${({ color }) => colorMap(theme)[color] || theme.colors[color]};
  font-size: ${({ size }) => fontSizeMap[size] * 0.7}rem;
  font-weight: ${({ weight }) => fontWeightMap[weight]};

  @media ${mediaQueries.tablet} {
    font-size: ${({ size }) => fontSizeMap[size]}rem;
  }
`

Header.propTypes = {
  type: PropTypes.number,
  color: PropTypes.string,
  size: PropTypes.string,
  weight: PropTypes.string,
  children: childrenType,
  margin: PropTypes.string,
  className: PropTypes.string,
  lineHeight: PropTypes.string,
}

export default Header
