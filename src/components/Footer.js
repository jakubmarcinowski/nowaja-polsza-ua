import React from 'react'
import styled from 'styled-components'

import FooterNavigation from './FooterNavigation'
import Paragraph from './Paragraph'
import ExternalLink from './ExternalLink'
import Brand from './Brand'
import SocialMediaList from './SocialMediaList'
import { mediaQueries } from '../utils/mediaQueries'

const StyledFooter = styled.footer`
  padding: 30px 0;
  overflow: hidden;

  @media ${mediaQueries.desktop} {
    padding: 24px 0 70px;
  }
`

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  margin-top: 20px;

  @media ${mediaQueries.tablet} {
    margin-top: 45px;
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

const Publisher = styled.div`
  margin: 10px auto 0;

  @media ${mediaQueries.tablet} {
    align-items: flex-end;
    margin-right: 0;
  }
`

const SocialMediaListMobile = styled(SocialMediaList)`
  @media ${mediaQueries.tablet} {
    display: none;
  }
`

const SocialMediaListDesktop = styled(SocialMediaList)`
  @media ${mediaQueries.phoneOnly} {
    display: none;
  }
`

const Footer = () => (
  <StyledFooter>
    <FooterNavigation />
    <Container>
      <SocialMediaListMobile />
      <Brand />
      <Info>
        <SocialMediaListDesktop />
        <Publisher>
          <Paragraph>
            издатель сайта{' '}
            <ExternalLink url="http://cprdip.pl/">
              <u>CPiDPR</u>
            </ExternalLink>
          </Paragraph>
        </Publisher>
      </Info>
    </Container>
  </StyledFooter>
)

export default Footer
