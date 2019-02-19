import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { theme } from '../utils/theme'

const Paragraph = ({ color, children, size, weight, margin }) => (
  <ParagraphWrap margin={margin} color={color} size={size} weight={weight}>
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
  SemiBold: 'SemiBold',
  Light: 'Light',
  Normal: 'Normal',
}

Paragraph.colors = {
  Primary: 'Primary',
}

Paragraph.defaultProps = {
  size: Paragraph.sizes.Medium,
  weight: Paragraph.weights.Normal,
  color: 'Primary',
}

const fontWeightMap = {
  [Paragraph.weights.Bold]: 'bold',
  [Paragraph.weights.SemiBold]: 500,
  [Paragraph.weights.Light]: 300,
  [Paragraph.weights.Normal]: 'normal',
}

const fontSizeMap = {
  [Paragraph.sizes.Big]: 1.6,
  [Paragraph.sizes.Medium]: 1.4,
  [Paragraph.sizes.MediumSmall]: 1.2,
  [Paragraph.sizes.Small]: 1.0,
}

const colorMap = () => ({
  [Paragraph.colors.Primary]: theme.colors.primary,
})

const ParagraphWrap = styled.p`
  line-height: 1.2;
  color: ${({ color }) => colorMap(theme)[color] || theme.text.colors[0]};
  font-size: ${({ size }) => fontSizeMap[size]}rem;
  font-weight: ${({ weight }) => fontWeightMap[weight]};
  ${({ margin }) => margin && `margin: ${margin};`};
`

Paragraph.propTypes = {
  color: PropTypes.string,
  size: PropTypes.string,
  weight: PropTypes.string,
  children: PropTypes.any,
  margin: PropTypes.number,
}

export default Paragraph
