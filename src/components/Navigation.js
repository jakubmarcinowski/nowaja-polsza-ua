import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

const StyledNavigation = styled.nav`
  .navigation {
    display: flex;
    justify-content: center;
    list-style: none;
    padding: 0;
    font-size: 1.6rem;
    font-family: ${props => props.theme.fonts.secondary};
  }

  .navigationItem {
    display: inline-flex;
    align-items: center;
    margin: 0 1rem;
    color: ${props => props.theme.colors.white};
  }
`

const navigationQuery = graphql`
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
`

const Navigation = () => (
  <StaticQuery
    query={navigationQuery}
    render={({ allContentfulMenuItem }) => (
      <StyledNavigation role="navigation">
        <ul className="navigation">
          {allContentfulMenuItem &&
            allContentfulMenuItem.edges &&
            allContentfulMenuItem.edges.map(({ node }) => (
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
