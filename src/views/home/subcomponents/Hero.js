import React from 'react'
import styled from 'styled-components'

import { childrenType } from '../../../types/children'
import { mediaQueries } from '../../../utils/mediaQueries'

const StyledHero = styled.div`
  @media ${mediaQueries.large} {
    display: grid;
    max-width: 100vw;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-flows: dense;
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
