import React from 'react'
import styled from 'styled-components'

import { childrenType } from '../../../types/children'
import { mediaQueries } from '../../../utils/mediaQueries'

const StyledHero = styled.div`
  padding: 0 0 2.5rem;

  @media ${mediaQueries.large} {
    display: flex;
    align-items: stretch;
    padding: 0 0 4rem;
  }
`

const Hero = ({ children }) => <StyledHero>{children}</StyledHero>

Hero.propTypes = {
  children: childrenType.isRequired,
}

export default Hero
