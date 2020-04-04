import React from 'react'
import styled from 'styled-components'

import { childrenType } from '../../../types/children'
import { mediaQueries } from '../../../utils/mediaQueries'

const StyledHero = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-auto-rows: minmax(50px, auto);
    max-width: 100vw;
    grid-gap: 15px;
    align-items: stretch;
  
  @media ${mediaQueries.phoneLandscape} {
    grid-auto-flows: dense;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: minmax(100px, 185px);
    grid-gap: 30px;
    align-items: stretch;
    padding: 0 0 2.5rem;
  }
  
  @media ${mediaQueries.desktop} {
    grid-auto-flows: dense;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: minmax(50px, 185px);
    grid-gap: 45px;
    align-items: stretch;
    padding: 0 0 2.5rem;
  }
`

const Hero = ({ children }) => <StyledHero>{children}</StyledHero>

Hero.propTypes = {
  children: childrenType.isRequired,
}

export default Hero
