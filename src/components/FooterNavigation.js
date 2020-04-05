import React from 'react'
import styled from 'styled-components'

import { theme } from '../utils/theme'
import AnimatedLink from './AnimatedLink'

const StyledNavigation = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-right: -6rem;
  line-height: 2.25;
  list-style: none;
`

const Item = styled.li`
  margin-right: 6rem;
  font-size: 1.6rem;
  font-family: ${theme.fonts.secondary};
  letter-spacing: 0.5px;
`

const FooterNavigation = () => (
  <StyledNavigation>
    <Item>
      <AnimatedLink opacity={0.7} url="/about-us">
        О проекте
      </AnimatedLink>
    </Item>
    <Item>
      <AnimatedLink opacity={0.7} url="/privacy-policy">
        Политика конфиденциальности
      </AnimatedLink>
    </Item>
    <Item>
      <AnimatedLink opacity={0.7} url="/wcag">
        Политика доступности
      </AnimatedLink>
    </Item>
  </StyledNavigation>
)

export default FooterNavigation
