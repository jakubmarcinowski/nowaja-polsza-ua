import React from 'react'
import logo from '../../static/spongebob.png'
import styled from 'styled-components'

const StyledBrand = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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
