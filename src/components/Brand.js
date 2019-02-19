import React from 'react'
import styled from 'styled-components'

import logo from '../../static/logo.svg'
import { mediaQueries } from '../utils/mediaQueries'
import Header from './Header'

const StyledBrand = styled.div`
  display: flex;
  align-items: center;

  @media ${mediaQueries.tablet} {
    justify-content: center;
  }
`

const Logo = styled.img`
  max-height: 50px;
  margin-right: 15px;
`

const Subtitle = styled(Header)`
  @media ${mediaQueries.phoneOnly} {
    display: none;
  }
`

const BreakLine = styled.br`
  display: none;

  @media ${mediaQueries.phoneOnly} {
    display: block;
  }
`

const Brand = () => (
  <StyledBrand>
    <Logo src={logo} alt="Nowaja Polsza logo" />
    <div>
      <Header size="Big" color="Primary">
        НОВАЯ <BreakLine />
        ПОЛЬША
      </Header>
      <Subtitle type={2} size="Medium" color="Primary">
        Наша миссия - Истина
      </Subtitle>
    </div>
  </StyledBrand>
)
export default Brand
