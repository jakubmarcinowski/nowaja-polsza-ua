import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { StaticQuery, graphql, Link } from 'gatsby'

import Header from './Header'
import { theme } from '../utils/theme'
import Navigation from './Navigation'
import SocialMediaList from './SocialMediaList'
import { novPolSocialMediaUrls } from '../utils/socialMedia'
import logoWithBackground from '../../static/logo-with-background.svg'

const StyledTopBar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 3.7rem;
`

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  margin-top: 1rem;
`

const Logo = styled.img`
  max-height: 50px;
`

const Title = styled(Header)`
  font-size: 2rem;
`

const Subtitle = styled(Header)`
  font-family: ${theme.fonts.secondary};
  font-size: 1.6rem;
  letter-spacing: 0.5px;
`

const LogoSubtitleLeft = styled(Subtitle)`
  margin-right: 1rem;
`

const LogoSubtitleRight = styled(Subtitle)`
  margin-left: 1rem;
`

const Container = styled.div`
  display: flex;
  width: 100%;
`

const Box = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`

const BoxLeft = styled.span`
  margin-right: auto;
`

const BoxRight = styled.span`
  margin-left: auto;
`

const BrandQuery = graphql`
  query BrandQuery {
    contentfulHomepageStaticContent {
      motto
    }
  }
`
const TopBar = () => (
  <StyledTopBar href="/">
    <Container>
      <Box>
        <BoxLeft>
          <Navigation/>
        </BoxLeft>
      </Box>
      <Box>
        <span>
          <Link to="/">
            <LogoContainer>
              <LogoSubtitleLeft
                type={2}
                size="Medium"
                color="White"
                weight="Light"
              >
                Осн. в
              </LogoSubtitleLeft>
              <Logo src={logoWithBackground} alt="Nowaja Polsza logo"/>
              <LogoSubtitleRight
                type={2}
                size="Medium"
                color="White"
                weight="Light"
              >
                1999 г.
              </LogoSubtitleRight>
            </LogoContainer>
          </Link>
        </span>
      </Box>
      <Box>
        <BoxRight>
          <SocialMediaList
            isWhite
            isSemiTransparent
            urls={novPolSocialMediaUrls}
          />
        </BoxRight>
      </Box>
    </Container>
    <Link to="/">
      <Title color="White" weight="Bold">
        НОВАЯ ПОЛЬША
      </Title>
      <StaticQuery
        query={BrandQuery}
        render={({ contentfulHomepageStaticContent }) => (
          <>
            {contentfulHomepageStaticContent &&
            contentfulHomepageStaticContent.motto && (
              <Subtitle
                type={2}
                size="Medium"
                color="White"
                weight="Light"
              >
                {contentfulHomepageStaticContent.motto}
              </Subtitle>
            )}
          </>
        )}
      />
    </Link>
  </StyledTopBar>
)

TopBar.propTypes = {
  isDarkVersion: PropTypes.bool,
}

export default TopBar
