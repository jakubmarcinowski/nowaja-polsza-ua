import React from 'react'
import styled from 'styled-components'

import { mediaQueries } from '../../../utils/mediaQueries'

const StyledHero = styled.div`
  margin-bottom: 4rem;
  @media ${mediaQueries.large} {
    display: flex;
    align-items: flex-start;
  }
`

const Hero = ({ children }) => <StyledHero>{children}</StyledHero>

export default Hero
