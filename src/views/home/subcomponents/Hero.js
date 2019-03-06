import React from 'react'
import styled from 'styled-components'

import { childrenType } from '../../../types/children'
import { mediaQueries } from '../../../utils/mediaQueries'

const StyledHero = styled.div`
  @media ${mediaQueries.large} {
    display: flex;
    align-items: stretch;
    padding: 0 0 2.5rem;
  }
`

const Hero = ({ children }) => <StyledHero>{children}</StyledHero>

Hero.propTypes = {
  children: childrenType.isRequired,
}

export default Hero
