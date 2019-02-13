import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const StyledNavigation = styled.nav`
  .navigation {
    display: flex;
    justify-content: center;
    list-style: none;
    padding: 0;
    margin: 0;
    height: 20vh;
    max-height: 100px;
    font-size: 1.25em;
  }

  .navigationItem {
    display: inline-flex;
    align-items: center;
    margin: 0 1em;
  }

  .navigationItem a {
    color: currentColor;
  }
`

const FooterNavigation = () => (
  <StyledNavigation role="navigation">
    <ul className="navigation">
      <li className="navigationItem">
        <Link to="/">Home</Link>
      </li>
      <li className="navigationItem">
        <Link to="/">About NP</Link>
      </li>
      <li className="navigationItem">
        <Link to="/">Privacy Policy</Link>
      </li>
    </ul>
  </StyledNavigation>
)

export default FooterNavigation
