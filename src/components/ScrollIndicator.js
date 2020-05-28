import React, { useRef, useState, useEffect, useCallback } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import throttle from 'lodash/throttle'

import { childrenType } from 'types/children'
import { mediaQueries } from 'utils/mediaQueries'
import { isIntersectionObserverSupported } from 'utils/browsers'

const Indicator = styled.div`
  --progress: 0;
  position: fixed;
  height: 5px;
  width: 100%;
  top: 6rem;
  left: 0;
  background-color: ${({ theme }) => theme.colors.greyLight};
  z-index: 3;
  transform: scaleY(${props => (props.hide ? 0 : 1)});
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
    transform: scaleX(var(--progress));
    transform-origin: left;
  }
`

const ScrollIndicator = ({ children, offset }) => {
  const ref = useRef()
  const [scrollProgress, setScrollProgress] = useState(0)
  const onScroll = useCallback(
    throttle(() => {
      const elHeight = ref.current.offsetHeight + offset
      const elTop = ref.current.getBoundingClientRect().top - offset
      const progress = -elTop / elHeight
      setScrollProgress(Math.min(1, Math.max(0, progress)))
    }, 50),
    []
  )
  useEffect(() => {
    if (isIntersectionObserverSupported()) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          entry.isIntersecting
            ? document.addEventListener('scroll', onScroll)
            : document.removeEventListener('scroll', onScroll)
        },
        { threshold: 0 }
      )
      if (ref.current) {
        observer.observe(ref.current)
      }
      return () => {
        observer.disconnect()
        document.removeEventListener('scroll', onScroll)
      }
    } else {
      document.addEventListener('scroll', onScroll)
      return () => document.removeEventListener('scroll', onScroll)
    }
  }, [ref.current])

  return (
    <div ref={ref}>
      <Indicator
        style={{ '--progress': scrollProgress }}
        hide={scrollProgress === 0 || scrollProgress === 1}
      />
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
