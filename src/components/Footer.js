import React from 'react'
import styled from 'styled-components'

import Brand from './Brand'
import FooterNavigation from './FooterNavigation'
import SocialMediaList from './SocialMediaList'

const StyledFooter = styled.footer`
  background: #aaa;
  padding: 24px;

  .container {
    display: flex;
    justify-content: space-between;
  }
`

const Footer = () => (
  <StyledFooter>
    <FooterNavigation />
    <div className="container">
      <Brand />
      <div>
        <SocialMediaList />
        <div>Wydawcą strony jest CPIDPR</div>
      </div>
    </div>
  </StyledFooter>
)

export default Footer
