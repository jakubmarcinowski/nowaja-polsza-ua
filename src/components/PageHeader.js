import React from 'react'
import styled from 'styled-components'

import Brand from './Brand'
import { theme } from '../utils/theme'
import Navigation from './Navigation'
import Categories from './Categories'
import { mediaQueries } from '../utils/mediaQueries'

const StyledPageHeader = styled.header`
  background: ${theme.colors.primary};
  background: ${props => props.theme.gradients.header},
    url('./header-background.jpg');
  background-position: 50% 50%;
  padding: 1rem 8rem 2rem;
  text-align: center;

  @media ${mediaQueries.phoneOnly} {
    display: none;
  }
`

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`

// @todo socials

const PageHeader = () => {
  return (
    <StyledPageHeader>
      <Container>
        <div>socials</div>
        <Navigation />
      </Container>
      <Brand />
      <Categories />
    </StyledPageHeader>
  )
}

export default PageHeader
