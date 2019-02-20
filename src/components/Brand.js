import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import Header from './Header'
import logo from '../../static/logo.svg'
import { mediaQueries } from '../utils/mediaQueries'
import { theme } from '../utils/theme'

const StyledBrand = styled.div`
  display: flex;
  flex-direction: ${props => (props.isDesktopFullVersion ? 'column' : 'row')};
  align-items: center;
  margin-bottom: ${props => (props.isDesktopFullVersion ? '3.7rem' : '0')};

  @media ${mediaQueries.tablet} {
    margin-top: 0;
    justify-content: center;
  }
`

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${props => (props.isDesktopFullVersion ? '2.0rem' : '0')};
  margin-top: ${props => (props.isDesktopFullVersion ? '1.0rem' : '0')};
`

const LogoWrapper = styled.div`
  position: relative;
  z-index: 0;

  &:after {
    content: '';
    position: absolute;
    z-index: -1;
    top: ${props => (props.isDesktopFullVersion ? '-11px' : '-8px')};
    left: ${props => (props.isDesktopFullVersion ? '-13px' : '-8px')};
    right: ${props => (props.isDesktopFullVersion ? '-13px' : '-8px')};
    bottom: ${props => (props.isDesktopFullVersion ? '-11px' : '-8px')};
    border: 1px solid black;
    border-radius: 50%;
    background-color: ${({ backgroundColor }) =>
      colorMap(theme)[backgroundColor] || theme.colors[backgroundColor]};
    opacity: ${props => (props.isDarkVersion ? '1' : '0.9')};

    @media ${mediaQueries.tablet} {
      ${props => props.isDesktopFullVersion || 'display: none;'}
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

  @media ${mediaQueries.tablet} {
    max-height: ${props => (props.isDesktopFullVersion ? '29px' : '50px')};
  }
`

const Title = styled(Header)`
  font-size: 1.4rem;

  @media ${mediaQueries.tablet} {
    font-size: ${props => (props.isDesktopFullVersion ? '2.0rem' : '2.7rem')};
  }
`

const Subtitle = styled(Header)`
  font-family: ${theme.fonts.secondary};
  font-size: ${props => (props.isDesktopFullVersion ? '1.6rem' : '2.1rem')};
  letter-spacing: 0.5px;

  @media ${mediaQueries.phoneOnly} {
    display: none;
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

  @media ${mediaQueries.tablet} {
    margin-left: ${props => (props.isDesktopFullVersion ? '0' : '20px')};
  }
`

const BreakLine = styled.br`
  display: none;

  @media ${mediaQueries.phoneOnly} {
    display: block;
  }
`

const Brand = ({ isDarkVersion, isDesktopFullVersion }) => (
  <StyledBrand isDesktopFullVersion={isDesktopFullVersion}>
    <LogoContainer isDesktopFullVersion={isDesktopFullVersion}>
      <LogoSubtitleLeft
        isDesktopFullVersion={isDesktopFullVersion}
        type={2}
        size="Medium"
        color={isDarkVersion ? 'Dark' : 'White'}
      >
        EST.
      </LogoSubtitleLeft>
      <LogoWrapper
        backgroundColor="White"
        isDarkVersion={isDarkVersion}
        isDesktopFullVersion={isDesktopFullVersion}
      >
        <Logo
          isDesktopFullVersion={isDesktopFullVersion}
          src={logo}
          alt="Nowaja Polsza logo"
        />
      </LogoWrapper>
      <LogoSubtitleRight
        isDesktopFullVersion={isDesktopFullVersion}
        type={2}
        size="Medium"
        color={isDarkVersion ? 'Dark' : 'White'}
      >
        1999
      </LogoSubtitleRight>
    </LogoContainer>
    <TitleWrapper isDesktopFullVersion={isDesktopFullVersion}>
      <Title
        isDesktopFullVersion={isDesktopFullVersion}
        color={isDarkVersion ? 'Dark' : 'White'}
        weight="Bold"
      >
        НОВАЯ <BreakLine />
        ПОЛЬША
      </Title>
      <Subtitle
        isDesktopFullVersion={isDesktopFullVersion}
        type={2}
        size="Medium"
        color={isDarkVersion ? 'Dark' : 'White'}
      >
        Наша миссия - Истина
      </Subtitle>
    </TitleWrapper>
  </StyledBrand>
)
Brand.defaultProps = {
  isDarkVersion: true,
  isDesktopFullVersion: false,
}

Brand.propTypes = {
  isDarkVersion: PropTypes.bool,
  isDesktopFullVersion: PropTypes.bool,
}

export default Brand
