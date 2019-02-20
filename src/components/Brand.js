import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import Header from './Header'
import logo from '../../static/logo.svg'
import { mediaQueries } from '../utils/mediaQueries'
import { theme } from '../utils/theme'

const StyledBrand = styled.div`
  display: flex;
  align-items: center;

  @media ${mediaQueries.tablet} {
    margin-top: 0;
    justify-content: center;
  }
`

const LogoWrapper = styled.div`
  position: relative;
  z-index: 0;

  @media ${mediaQueries.phoneOnly} {
    &:after {
      content: '';
      position: absolute;
      z-index: -1;
      top: -8px;
      left: -8px;
      right: -8px;
      bottom: -8px;
      border: 1px solid black;
      border-radius: 50%;
      background-color: ${({ backgroundColor }) =>
        colorMap(theme)[backgroundColor] || theme.colors[backgroundColor]};
      opacity: ${props => props.backgroundOpacity};
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
    max-height: 50px;
  }
`

const Title = styled(Header)`
  font-size: 1.4rem;

  @media ${mediaQueries.tablet} {
    font-size: 2.7rem;
  }
`

const Subtitle = styled(Header)`
  font-family: ${theme.fonts.secondary};
  font-size: 2.1rem;
  letter-spacing: 0.5px;

  @media ${mediaQueries.phoneOnly} {
    display: none;
  }
`

const TitleWrapper = styled.div`
  margin-left: 15px;

  @media ${mediaQueries.tablet} {
    margin-left: 20px;
  }
`

const BreakLine = styled.br`
  display: none;

  @media ${mediaQueries.phoneOnly} {
    display: block;
  }
`

const Brand = ({ logoBackgroundColor, logoBackgroundOpacity, titleColor }) => (
  <StyledBrand>
    <LogoWrapper
      backgroundColor={logoBackgroundColor}
      backgroundOpacity={logoBackgroundOpacity}
    >
      <Logo src={logo} alt="Nowaja Polsza logo" />
    </LogoWrapper>
    <TitleWrapper>
      <Title color={titleColor} weight="Bold">
        НОВАЯ <BreakLine />
        ПОЛЬША
      </Title>
      <Subtitle type={2} size="Medium" color="Dark">
        Наша миссия - Истина
      </Subtitle>
    </TitleWrapper>
  </StyledBrand>
)
Brand.defaultProps = {
  logoBackgroundOpacity: '1',
  logoBackgroundColor: 'White',
  titleColor: 'Dark',
}

Brand.propTypes = {
  logoBackgroundOpacity: PropTypes.string,
  logoBackgroundColor: PropTypes.string,
  titleColor: PropTypes.string,
}

export default Brand
