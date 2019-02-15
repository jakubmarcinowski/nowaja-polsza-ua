import React from 'react'
import styled from 'styled-components'

import logo from '../../static/spongebob.png'
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
    <Logo src={logo} alt="Nowaja Polsza logo"/>
    <div>
      <h1>НОВАЯ ПОЛЬША</h1>
      <h2>Наша миссия - Истина</h2>
    </div>
  </StyledBrand>
)
export default Brand
