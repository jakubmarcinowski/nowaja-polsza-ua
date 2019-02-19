import React from 'react'
import styled from 'styled-components'

import Brand from './Brand'
import { theme } from '../utils/theme'
import Navigation from './Navigation'
import { mediaQueries } from '../utils/mediaQueries'

const StyledPageHeader = styled.header`
  background: ${theme.colors.primary};
  background: linear-gradient(
      to bottom,
      rgba(17, 29, 34, 0.85),
      rgba(17, 29, 34, 0.85)
    ),
    linear-gradient(to bottom, rgba(54, 54, 54, 0), rgba(17, 29, 34, 0.56)),
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
    </StyledPageHeader>
  )
}

export default PageHeader
