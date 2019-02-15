import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const StyledNavigation = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  font-size: 1.25em;
`

const Item = styled.li`
  margin-right: 30px;

  &:last-child {
    margin-right: 0;
  }
`

// .navigationItem {
//   display: inline-flex;
//   align-items: center;
//   margin: 0 1em;
// }

// .navigationItem a {
//   color: currentColor;
// }

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
