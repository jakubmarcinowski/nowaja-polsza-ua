import React from 'react'
import styled from 'styled-components'

import { childrenType } from '../../../types/children'
import { mediaQueries } from '../../../utils/mediaQueries'

const StyledHero = styled.div`
  padding: 2.5rem 0;

  @media ${mediaQueries.large} {
    display: flex;
    align-items: stretch;
  }
`

const Hero = ({ children }) => <StyledHero>{children}</StyledHero>

Hero.propTypes = {
  children: childrenType.isRequired,
}

export default Hero
