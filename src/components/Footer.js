import React from 'react'
import styled from 'styled-components'

import FooterNavigation from './FooterNavigation'
import Paragraph from './Paragraph'
import ExternalLink from './ExternalLink'
import Brand from './Brand'
import SocialMediaList from './SocialMediaList'
import { mediaQueries } from '../utils/mediaQueries'
import { theme } from '../utils/theme'
import Wrapper from './Wrapper'
import Line from './Line'
import cprdip from '../../static/CPRDiP-logo-kolor.png'

const StyledFooter = styled.footer`
  padding: 3rem 0 4rem;
  overflow: hidden;

  @media ${mediaQueries.desktop} {
    padding: 2.4rem 0 7rem;
  }
`

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  margin-top: 3rem;

  @media ${mediaQueries.tablet} {
    margin-top: 45px;
    flex-direction: row;
  }
`

const Info = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 3rem;

  @media ${mediaQueries.tablet} {
    align-items: flex-end;
    margin-top: 0;
  }
`

const Publisher = styled.div`
  margin: 0 auto;

  @media ${mediaQueries.tablet} {
    align-items: flex-end;
    margin-right: 0;
    margin: 1rem 0 0;
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
    background: red;
  }
`

const PublisherText = styled(Paragraph)`
  letter-spacing: 0.4px;
  font-size: 1.6rem;
  font-family: ${theme.fonts.secondary};

  @media ${mediaQueries.tablet} {
    font-size: 1.8rem;
  }
`

const BrandContainer = styled.span`
  margin-top: 3rem;

  @media ${mediaQueries.tablet} {
    margin-top: 0;
  }
`
const CPRDIPLogo = styled.img`
  width: 30px;
`

const Footer = () => (
  <Wrapper>
    <Line />
    <StyledFooter>
      <FooterNavigation />
      <Container>
        <SocialMediaListMobile />
        <BrandContainer>
          <Brand />
        </BrandContainer>
        <Info>
          <SocialMediaListDesktop />
          <Publisher>
            <PublisherText color="Dark">
              издатель{' '}
              <ExternalLink url="http://cprdip.pl/">
                <CPRDIPLogo src={cprdip} />
              </ExternalLink>
            </PublisherText>
          </Publisher>
        </Info>
      </Container>
    </StyledFooter>
  </Wrapper>
)

export default Footer
