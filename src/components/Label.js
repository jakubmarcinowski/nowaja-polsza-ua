import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { childrenType } from '../types/children'
import { mediaQueries } from '../utils/mediaQueries'
import Paragraph from '../components/Paragraph'

const StyledLabel = styled(Paragraph)`
  display: block;
  padding: 0.5rem 1rem;
  background: ${({ theme, color }) =>
    theme.colors.highlighted[color] || theme.colors[color]};
  font-size: 1.4rem;
  color: ${props => props.theme.colors.white};

  @media ${mediaQueries.tablet} {
    font-size: 1.6rem;
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
