import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import { mediaQueries } from '../utils/mediaQueries'
import { theme } from '../utils/theme'

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

  @media ${mediaQueries.tablet} {
    font-size: 2rem;
  }
`

const FooterNavigation = () => (
  <StyledNavigation>
    <Item>
      <Link to="/">О нас</Link>
    </Item>
    <Item>
      <Link to="/">Контакт</Link>
    </Item>
    <Item>
      <Link to="/privacy-policy">Политика конфиденциальности</Link>
    </Item>
    <Item>
      <Link to="/wcag">Политика доступности</Link>
    </Item>
  </StyledNavigation>
)

export default FooterNavigation
