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
  overflow,
  height,
  textAlign,
  onClick,
}) => (
  <HeaderStyled
    as={`h${type}`}
    color={color}
    size={size}
    weight={weight}
    className={className}
    margin={margin}
    lineHeight={lineHeight}
    overflow={overflow}
    height={height}
    textAlign={textAlign}
    onClick={onClick}
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
  Biggest: 'Biggest',
  Bigger: 'Bigger',
  Big: 'Big',
  MediumBigger: 'MediumBigger',
  MediumBig: 'MediumBig',
  Medium: 'Medium',
  MediumSmall: 'MediumSmall',
  Small: 'Small',
  ExtraSmall: 'ExtraSmall',
}

Header.lineHeight = {
  Biggest: 'Biggest',
  Bigger: 'Bigger',
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
  [Header.sizes.Biggest]: 3.6,
  [Header.sizes.Bigger]: 2.6,
  [Header.sizes.Big]: 2.3,
  [Header.sizes.MediumBigger]: 2.1,
  [Header.sizes.MediumBig]: 1.8,
  [Header.sizes.Medium]: 1.6,
  [Header.sizes.MediumSmall]: 1.4,
  [Header.sizes.Small]: 1.2,
  [Header.sizes.ExtraSmall]: 1.0,
}

const lineHeightMap = {
  [Header.sizes.Biggest]: 1.8,
  [Header.sizes.Bigger]: 1.6,
  [Header.sizes.Big]: 1.4,
  [Header.sizes.Medium]: 1.3,
  [Header.sizes.Small]: 1.2,
}

const colorMap = () => ({
  [Header.colors.Primary]: theme.colors.primary,
  [Header.colors.Dark]: theme.colors.dark,
  [Header.colors.White]: theme.colors.white,
})

const HeaderStyled = styled.h1`
  ${({ overflow }) => overflow && `overflow: ${overflow}`};
  ${({ height }) => height && `height: ${height * 0.7}rem`};
  margin: ${({ margin }) => margin};
  line-height: ${({ lineHeight }) => lineHeightMap[lineHeight]};
  color: ${({ color }) => colorMap(theme)[color] || theme.colors[color]};
  font-size: ${({ size }) => fontSizeMap[size] * 0.7}rem;
  font-weight: ${({ weight }) => fontWeightMap[weight]};
  text-align: ${({ textAlign }) => textAlign};

  @media ${mediaQueries.tablet} {
    ${({ height }) => height && `height: ${height}rem`};
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
  overflow: PropTypes.string,
  height: PropTypes.string,
  textAlign: PropTypes.string,
  onClick: PropTypes.func,
}

export default Header
