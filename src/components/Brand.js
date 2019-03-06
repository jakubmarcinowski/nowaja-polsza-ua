import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import Header from './Header'
import logo from '../../static/logo.svg'
import { mediaQueries } from '../utils/mediaQueries'
import { theme } from '../utils/theme'
import Navigation from './Navigation'
import SocialMediaList from './SocialMediaList'
import { Link } from 'gatsby'
import { novPolSocialMediaUrls } from '../utils/socialMedia'

const StyledBrand = styled.div`
  display: flex;
  flex-direction: ${props => (props.isFullVersion ? 'column' : 'row')};
  align-items: center;
  margin-bottom: ${props => props.isFullVersion && '3.7rem'};

  @media ${mediaQueries.desktop} {
    margin-top: 0;
    justify-content: center;
  }

  @media ${mediaQueries.phoneOnly} {
    margin-left: ${props => !props.isFullVersion && '0.8rem'};
  }
`

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${props => props.isFullVersion && '2.0rem'};
  margin-top: ${props => {
    if (props.isInHeader) return '2.0rem'
    if (props.isFullVersion) return '1.0rem'
    return '0'
  }};
`

const LogoWrapper = styled.div`
  position: relative;
  z-index: 0;

  &:after {
    content: '';
    position: absolute;
    z-index: -1;
    top: ${props => (props.isFullVersion ? '-11px' : '-8px')};
    left: ${props => (props.isFullVersion ? '-13px' : '-8px')};
    right: ${props => (props.isFullVersion ? '-13px' : '-8px')};
    bottom: ${props => (props.isFullVersion ? '-11px' : '-8px')};
    border: 1px solid black;
    border-radius: 50%;
    background-color: ${({ backgroundColor }) =>
      colorMap(theme)[backgroundColor] || theme.colors[backgroundColor]};
    opacity: ${props => (props.isDarkVersion ? '1' : '0.9')};

    @media ${mediaQueries.desktop} {
      ${props => props.isFullVersion || 'display: none;'}
    }
  }
`

LogoWrapper.colors = {
  White: 'White',
}

const colorMap = () => ({
  [LogoWrapper.colors.White]: theme.colors.white,
})

const Logo = styled.img`
  display: block;
  max-height: 18px;

  @media ${mediaQueries.desktop} {
    max-height: ${props => (props.isFullVersion ? '29px' : '50px')};
  }
`

const Title = styled(Header)`
  font-size: 1.4rem;

  @media ${mediaQueries.desktop} {
    font-size: ${props => (props.isFullVersion ? '2.0rem' : '2.7rem')};
  }
`

const Subtitle = styled(Header)`
  display: none;
  font-family: ${theme.fonts.secondary};
  font-size: ${props => (props.isFullVersion ? '1.6rem' : '2.1rem')};
  letter-spacing: 0.5px;

  @media ${mediaQueries.desktop} {
    display: block;
  }
`

const LogoSubtitleLeft = styled(Subtitle)`
  margin-right: 2.5rem;
`

const LogoSubtitleRight = styled(Subtitle)`
  margin-left: 2.5rem;
`

const TitleWrapper = styled.div`
  margin-left: 15px;

  @media ${mediaQueries.desktop} {
    margin-left: ${props => (props.isFullVersion ? '0' : '20px')};
  }
`

const BreakLine = styled.br`
display: block;

  @media ${mediaQueries.desktop} {
    display: none;
  }
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

class Brand extends React.Component {
  getLogoContainer(isFullVersion, isDarkVersion, isInHeader) {
    return (
      <LogoContainer isFullVersion={isFullVersion} isInHeader={isInHeader}>
        {isFullVersion && (
          <LogoSubtitleLeft
            isFullVersion={isFullVersion}
            type={2}
            size="Medium"
            color={isDarkVersion ? 'Dark' : 'White'}
          >
            Осн. в
          </LogoSubtitleLeft>
        )}
        <LogoWrapper
          backgroundColor="White"
          isDarkVersion={isDarkVersion}
          isFullVersion={isFullVersion}
        >
          <Logo
            isFullVersion={isFullVersion}
            src={logo}
            alt="Nowaja Polsza logo"
          />
        </LogoWrapper>
        {isFullVersion && (
          <LogoSubtitleRight
            isFullVersion={isFullVersion}
            type={2}
            size="Medium"
            color={isDarkVersion ? 'Dark' : 'White'}
          >
            1999 г.
          </LogoSubtitleRight>
        )}
      </LogoContainer>
    )
  }

  render() {
    const { isFullVersion, isDarkVersion, isInHeader } = this.props

    return (
      <StyledBrand isFullVersion={isFullVersion} href="/">
        {isInHeader ? (
          <Container>
            <Box>
              <BoxLeft>
                <Navigation />
              </BoxLeft>
            </Box>
            <Box>
              <span>
                <Link to="/">
                  {this.getLogoContainer(
                    isFullVersion,
                    isDarkVersion,
                    isInHeader
                  )}
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
        ) : (
          <Link to="/">
            {this.getLogoContainer(isFullVersion, isDarkVersion, isInHeader)}
          </Link>
        )}
        <Link to="/">
          <TitleWrapper isFullVersion={isFullVersion}>
            <Title
              isFullVersion={isFullVersion}
              color={isDarkVersion ? 'Dark' : 'White'}
              weight="Bold"
            >
              НОВАЯ <BreakLine />
              ПОЛЬША
            </Title>
            <Subtitle
              isFullVersion={isFullVersion}
              type={2}
              size="Medium"
              color={isDarkVersion ? 'Dark' : 'White'}
            >
              Наша миссия - Истина
            </Subtitle>
          </TitleWrapper>
        </Link>
      </StyledBrand>
    )
  }
}
Brand.defaultProps = {
  isDarkVersion: true,
  isFullVersion: false,
}

Brand.propTypes = {
  isDarkVersion: PropTypes.bool,
  isFullVersion: PropTypes.bool,
  isInHeader: PropTypes.bool,
}

export default Brand
