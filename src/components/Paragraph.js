import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { childrenType } from '../types/children'
import { theme } from '../utils/theme'

const Paragraph = ({
  className,
  color,
  children,
  size,
  weight,
  margin,
  lineHeight,
}) => (
  <ParagraphWrap
    margin={margin}
    color={color}
    size={size}
    weight={weight}
    className={className}
    lineHeight={lineHeight}
  >
    {children}
  </ParagraphWrap>
)

Paragraph.sizes = {
  Big: 'Big',
  Medium: 'Medium',
  MediumSmall: 'MediumSmall',
  Small: 'Small',
}

Paragraph.weights = {
  Bold: 'Bold',
  Light: 'Light',
  Normal: 'Normal',
}

Paragraph.colors = {
  Primary: 'Primary',
  Dark: 'Dark',
}

Paragraph.lineHeight = {
  Medium: 'Medium',
  Small: 'Small',
}

Paragraph.defaultProps = {
  size: Paragraph.sizes.Medium,
  weight: Paragraph.weights.Normal,
  color: 'Primary',
  lineHeight: Paragraph.lineHeight.Small,
}

const fontWeightMap = {
  [Paragraph.weights.Bold]: 700,
  [Paragraph.weights.Light]: 300,
  [Paragraph.weights.Normal]: 400,
}

const fontSizeMap = {
  [Paragraph.sizes.Big]: 1.6,
  [Paragraph.sizes.Medium]: 1.4,
  [Paragraph.sizes.MediumSmall]: 1.2,
  [Paragraph.sizes.Small]: 1.0,
}

const lineHeightMap = {
  [Paragraph.sizes.Medium]: 1.4,
  [Paragraph.sizes.Small]: 1.2,
}

const colorMap = () => ({
  [Paragraph.colors.Primary]: theme.colors.primary,
  [Paragraph.colors.Dark]: theme.colors.dark,
})

const ParagraphWrap = styled.p`
  ${({ margin }) => margin && `margin: ${margin};`};
  line-height: ${({ lineHeight }) => lineHeightMap[lineHeight]};
  color: ${({ color }) => colorMap(theme)[color] || theme.colors[color]};
  font-size: ${({ size }) => fontSizeMap[size]}rem;
  font-weight: ${({ weight }) => fontWeightMap[weight]};
`

Paragraph.propTypes = {
  color: PropTypes.string,
  size: PropTypes.string,
  weight: PropTypes.string,
  children: childrenType,
  margin: PropTypes.number,
  className: PropTypes.string,
  lineHeight: PropTypes.string,
}

export default Paragraph
