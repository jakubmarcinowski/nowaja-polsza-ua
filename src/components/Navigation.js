import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import AnimatedLink from 'components/AnimatedLink'

const StyledNavigation = styled.nav`
  .navigation {
    display: flex;
    justify-content: center;
    list-style: none;
    margin: 0 -1rem;
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
                <AnimatedLink url={node.slug}>{node.name}</AnimatedLink>
              </li>
            ))}
        </ul>
      </StyledNavigation>
    )}
  />
)

export default Navigation
