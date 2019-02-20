import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import Header from './Header'
import logo from '../../static/logo.svg'
import { mediaQueries } from '../utils/mediaQueries'
import { theme } from '../utils/theme'

const StyledBrand = styled.div`
  display: flex;
  flex-direction: ${props => (props.isFullVersion ? 'column' : 'row')};
  align-items: center;
  margin-bottom: ${props => props.isFullVersion && '3.7rem'};

  @media ${mediaQueries.tablet} {
    margin-top: 0;
    justify-content: center;
  }
`

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${props => props.isFullVersion && '2.0rem'};
  margin-top: ${props => props.isFullVersion && '1.0rem'};
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

    @media ${mediaQueries.tablet} {
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

  @media ${mediaQueries.tablet} {
    max-height: ${props => (props.isFullVersion ? '29px' : '50px')};
  }
`

const Title = styled(Header)`
  font-size: 1.4rem;

  @media ${mediaQueries.tablet} {
    font-size: ${props => (props.isFullVersion ? '2.0rem' : '2.7rem')};
  }
`

const Subtitle = styled(Header)`
  font-family: ${theme.fonts.secondary};
  font-size: ${props => (props.isFullVersion ? '1.6rem' : '2.1rem')};
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
    margin-left: ${props => (props.isFullVersion ? '0' : '20px')};
  }
`

const BreakLine = styled.br`
  display: none;

  @media ${mediaQueries.phoneOnly} {
    display: block;
  }
`

const Brand = ({ isDarkVersion, isFullVersion }) => (
  <StyledBrand isFullVersion={isFullVersion}>
    <LogoContainer isFullVersion={isFullVersion}>
      {isFullVersion && (
        <LogoSubtitleLeft
          isFullVersion={isFullVersion}
          type={2}
          size="Medium"
          color={isDarkVersion ? 'Dark' : 'White'}
        >
          EST.
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
          1999
        </LogoSubtitleRight>
      )}
    </LogoContainer>
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
  </StyledBrand>
)
Brand.defaultProps = {
  isDarkVersion: true,
  isFullVersion: false,
}

Brand.propTypes = {
  isDarkVersion: PropTypes.bool,
  isFullVersion: PropTypes.bool,
}

export default Brand
