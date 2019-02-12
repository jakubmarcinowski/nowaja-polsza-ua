import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
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

const Navigation = () => (
  <StaticQuery
    query={graphql`
      query NavigationQuery {
        allContentfulMenuItem(sort: { fields: [order], order: ASC }) {
          edges {
            node {
              name
              slug
            }
          }
        }
      }
    `}
    render={({ allContentfulMenuItem }) => (
      <StyledNavigation role="navigation">
        <ul className="navigation">
          {allContentfulMenuItem.edges.map(({ node }) => (
            <li key={node.slug} className="navigationItem">
              <Link to={node.slug}>{node.name}</Link>
            </li>
          ))}
        </ul>
      </StyledNavigation>
    )}
  />
)

export default Navigation
