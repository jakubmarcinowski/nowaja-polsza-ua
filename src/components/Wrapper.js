import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { childrenType } from '../types/children'
import { mediaQueries } from '../utils/mediaQueries'

const Wrapper = ({ children, size, position }) => {
  return (
    <StyledWrapper size={size} position={position}>
      {children}
    </StyledWrapper>
  )
}

Wrapper.defaultProps = {
  size: 'Medium',
}

Wrapper.sizes = {
  Medium: 'Medium',
  Small: 'Small',
}

const sizeMap = {
  [Wrapper.sizes.Medium]: 1400,
  [Wrapper.sizes.Small]: 1152,
}

const StyledWrapper = styled.div`
  ${({ position }) => position && `position: ${position}`};
  max-width: ${({ size }) => sizeMap[size]}px;
  margin: 0 auto;
  padding: 0 20px;

  @media ${mediaQueries.tablet} {
    max-width: ${({ size }) => sizeMap[size]}px;
    padding: 0 40px;
  }

  @media ${mediaQueries.large} {
    padding: 0 80px;
  }
`

Wrapper.propTypes = {
  children: childrenType,
  size: PropTypes.string,
  position: PropTypes.string,
}

export default Wrapper
