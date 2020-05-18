import React, { useRef, useState, useEffect, useCallback } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { childrenType } from 'types/children'
import { mediaQueries } from 'utils/mediaQueries'

const Indicator = styled.div`
  position: fixed;
  height: 5px;
  width: 100%;
  top: 6rem;
  left: 0;
  background-color: ${({ theme }) => theme.colors.greyLight};
  z-index: 3;
  transform: scaleY(
    ${props => (props.percentage === 0 || props.percentage === 100 ? 0 : 1)}
  );
  transform-origin: top;
  transition: transform ${props => props.theme.animations.default};

  @media ${mediaQueries.desktop} {
    top: ${({ theme }) => theme.grid.categoriesDesktopHeight};
    padding-top: 1px;
    height: 9px;
  }

  &::after {
    content: '';
    position: fixed;
    height: 100%;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.authorLink};
    transform: scaleX(${props => props.percentage / 100});
    transform-origin: left;
  }
`

const ScrollIndicator = ({ children, offset }) => {
  const ref = useRef()
  const [scrollPercentage, setScrollPercentage] = useState(0)
  const onScroll = useCallback(() => {
    const elHeight = ref.current.offsetHeight + offset
    const elTop = ref.current.getBoundingClientRect().top - offset
    const percentage = (-elTop / elHeight) * 100
    setScrollPercentage(Math.min(100, Math.max(0, percentage)))
  })
  useEffect(() => {
    if (ref.current) {
      document.addEventListener('scroll', onScroll)
    }
    return () => document.removeEventListener('scroll', onScroll)
  }, ref)

  return (
    <div ref={ref}>
      <Indicator percentage={scrollPercentage} />
      {children}
    </div>
  )
}

ScrollIndicator.defaultProps = {
  offset: 0,
}

ScrollIndicator.propTypes = {
  children: childrenType,
  offset: PropTypes.number,
}

export default ScrollIndicator
