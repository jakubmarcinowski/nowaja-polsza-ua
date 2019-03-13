import React from 'react'
import styled from 'styled-components'

import FooterNavigation from './FooterNavigation'
import Paragraph from './Paragraph'
import ExternalLink from './ExternalLink'
import SocialMediaList from './SocialMediaList'
import { mediaQueries } from '../utils/mediaQueries'
import { theme } from '../utils/theme'
import Wrapper from './Wrapper'
import Line from './Line'
import cprdipExtended from '../../static/logo-cprdip-extended.png'
import { novPolSocialMediaUrls } from '../utils/socialMedia'
import Brand from './Brand'

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

  @media ${mediaQueries.desktop} {
    margin-top: 45px;
    flex-direction: row;
  }
`

const Info = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 3rem;

  @media ${mediaQueries.desktop} {
    align-items: flex-end;
    margin-top: 0;
  }
`

const Publisher = styled.div`
  display: flex;
  align-items: center;

  @media ${mediaQueries.tablet} {
    margin: 0;
  }
`

const SocialMediaListMobile = styled(SocialMediaList)`
  @media ${mediaQueries.desktop} {
    display: none;
  }
`

const SocialMediaListDesktop = styled(SocialMediaList)`
  display: none;

  @media ${mediaQueries.desktop} {
    display: flex;
  }
`

const PublisherText = styled(Paragraph)`
  margin-right: 2rem;
  letter-spacing: 0.4px;
  font-size: 1.4rem;
  font-family: ${theme.fonts.secondary};

  @media ${mediaQueries.tablet} {
    font-size: 1.6rem;
  }
`

const BrandContainer = styled.span`
  margin-top: 3rem;

  @media ${mediaQueries.desktop} {
    margin-top: 0;
  }
`
const CPRDIPLogo = styled.img`
  height: 5rem;
`

const Footer = () => (
  <Wrapper>
    <Line />
    <StyledFooter>
      <FooterNavigation />
      <Container>
        <SocialMediaListMobile
          isBig
          isSemiTransparent
          urls={novPolSocialMediaUrls}
        />
        <BrandContainer>
          <Brand isDarkVersion/>
        </BrandContainer>
        <SocialMediaListDesktop
          isBig
          isSemiTransparent
          urls={novPolSocialMediaUrls}
        />
        <Info>
          <Publisher>
            <PublisherText color="Dark">Издатель:</PublisherText>
            <ExternalLink url="http://cprdip.pl/">
              <CPRDIPLogo src={cprdipExtended} alt="CPRDIP logo" />
            </ExternalLink>
          </Publisher>
        </Info>
      </Container>
    </StyledFooter>
  </Wrapper>
)

export default Footer
