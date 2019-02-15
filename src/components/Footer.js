import React from 'react'
import styled from 'styled-components'

import Brand from './Brand'
import SocialMediaList from './SocialMediaList'
import { mediaQueries } from './Layout'

// @media ${mediaQueries.phone} {
//   background: red;
// }

const StyledFooter = styled.footer`
  padding: 70px 0;
`

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`

const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`

{
  /* TODO change p to a component */
}
const Publisher = styled.p`
  margin-top: 10px;
`

const Footer = () => (
  <StyledFooter mediaQueries={mediaQueries}>
    {/* <FooterNavigation /> */}
    <Container>
      <Brand />
      <Info>
        <SocialMediaList />
        <Publisher>
          издатель сайта
          <a
            href="https://google.com"
            target="_blank"
            rel="noopener norefferer"
          >
            CPiDPR
          </a>
        </Publisher>
      </Info>
    </Container>
  </StyledFooter>
)

export default Footer
