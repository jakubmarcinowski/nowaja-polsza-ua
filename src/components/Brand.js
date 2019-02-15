import React from 'react'
import styled from 'styled-components'

import Header from './Header'
import logo from '../../static/logo.svg'
import { mediaQueries } from '../utils/mediaQueries'

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

const Brand = () => (
  <StyledBrand>
    <Logo src={logo} alt="Nowaja Polsza logo" />
    <div>
      <Header size="Big" color="Primary">
        НОВАЯ ПОЛЬША
      </Header>
      <Header type={2} size="Medium" color="Primary">
        Наша миссия - Истина
      </Header>
    </div>
  </StyledBrand>
)
export default Brand
