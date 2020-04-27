import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { childrenType } from 'types/children'
import { mediaQueries } from 'utils/mediaQueries'
import { contentWidth } from 'utils/contentWidth'

const Wrapper = ({ className, children, size, position }) => {
  return (
    <StyledWrapper size={size} position={position} className={className}>
      {children}
    </StyledWrapper>
  )
}

Wrapper.defaultProps = {
  size: 'Big',
}

Wrapper.sizes = {
  Big: 'Big',
  Medium: 'Medium',
  Small: 'Small',
}

const sizeMap = {
  [Wrapper.sizes.Big]: contentWidth.big,
  [Wrapper.sizes.Medium]: contentWidth.medium,
  [Wrapper.sizes.Small]: contentWidth.small,
}

const StyledWrapper = styled.div`
  ${({ position }) => position && `position: ${position}`};
  max-width: ${({ size }) => sizeMap[size]}px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.grid.paddings.mobile};

  @media ${mediaQueries.tablet} {
    max-width: ${({ size }) => sizeMap[size]}px;
    padding: 0 ${({ theme }) => theme.grid.paddings.tablet};
  }

  @media ${mediaQueries.large} {
    padding: 0 ${({ theme }) => theme.grid.paddings.large};
  }
`

Wrapper.propTypes = {
  children: childrenType,
  size: PropTypes.string,
  position: PropTypes.string,
  className: PropTypes.string,
}

export default Wrapper
