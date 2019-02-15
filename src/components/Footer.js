import React from 'react'
import styled from 'styled-components'

import ExternalLink from './ExternalLink'
import Brand from './Brand'
import SocialMediaList from './SocialMediaList'
import { mediaQueries } from '../utils/mediaQueries'

const StyledFooter = styled.footer`
  padding: 30px 0;

  @media ${mediaQueries.desktop} {
    padding: 70px 0;
  }
`

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  @media ${mediaQueries.tablet} {
    flex-direction: row;
  }
`

const Info = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;

  @media ${mediaQueries.tablet} {
    align-items: flex-end;
    margin-top: 0;
  }
`

{
  /* TODO change p to a component */
}
const Publisher = styled.p`
  margin-top: 10px;
`

const Footer = () => (
  <StyledFooter>
    <Container>
      <Brand />
      <Info>
        <SocialMediaList />
        <Publisher>
          издатель сайта{' '}
          <ExternalLink url="https://www.github.com/maisonm">
            <u>CPiDPR</u>
          </ExternalLink>
        </Publisher>
      </Info>
    </Container>
  </StyledFooter>
)

export default Footer
