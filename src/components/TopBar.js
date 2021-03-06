import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { StaticQuery, graphql, Link } from 'gatsby'

import Header from 'components/Header'
import { theme } from 'utils/theme'
import Navigation from 'components/Navigation'
import SocialMediaList from 'components/SocialMediaList'
import { novPolSocialMediaUrls } from 'utils/socialMedia'
import logoWithBackground from 'static/logo-with-background.svg'
import { trans } from 'utils/translate'

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
  margin-bottom: 0.5rem;
  font-size: ${({ theme }) => theme.logoTitleFontSize};
`

const Subtitle = styled(Header)`
  font-family: ${theme.fonts.secondary};
  font-size: ${({ theme }) => theme.logoSubtitleFontSize};
  letter-spacing: 0.5px;
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
          <Navigation />
        </BoxLeft>
      </Box>
      <Box>
        <span>
          <Link to="/">
            <LogoContainer>
              <Logo src={logoWithBackground} alt="Nowaja Polsza logo" />
            </LogoContainer>
          </Link>
        </span>
      </Box>
      <Box>
        <BoxRight>
          <SocialMediaList
            isWhite
            isSemiTransparent
            urls={novPolSocialMediaUrls()}
          />
        </BoxRight>
      </Box>
    </Container>
    <Link to="/">
      <Title color="White" weight="Bold">
        {trans('BRAND')}
      </Title>
      <StaticQuery
        query={BrandQuery}
        render={({ contentfulHomepageStaticContent }) => (
          <>
            {contentfulHomepageStaticContent &&
              contentfulHomepageStaticContent.motto && (
                <Subtitle type={2} size="Medium" color="White" weight="Light">
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
