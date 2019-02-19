import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const StyledNavigation = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  list-style: none;
  margin-right: -3rem;
`

const Item = styled.li`
  margin-right: 3rem;
`

const FooterNavigation = () => (
  <StyledNavigation>
    <Item>
      <Link to="/">О Новой Польше Контакты</Link>
    </Item>
    <Item>
      <Link to="/">Политика</Link>
    </Item>
    <Item>
      <Link to="/">конфиденциальности</Link>
    </Item>
  </StyledNavigation>
)

export default FooterNavigation
