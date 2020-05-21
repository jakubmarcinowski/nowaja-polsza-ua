import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import { Link, StaticQuery } from 'gatsby'

const MenuItem = styled.li`
  padding-bottom: 25px;
  line-height: 1.2;
  letter-spacing: 0.6px;
  color: ${props => props.theme.colors.white};
  font-size: 1.6rem;
`

const navigationQuery = graphql`
  query NavigationMobileQuery {
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

const MobileMenu = () => (
  <ul>
    <StaticQuery
      query={navigationQuery}
      render={({ allContentfulMenuItem }) => (
        <>
          {allContentfulMenuItem &&
            allContentfulMenuItem.edges &&
            allContentfulMenuItem.edges.map(({ node }) => (
              <MenuItem key={node.slug}>
                <Link to={`/${node.slug}`}>{node.name}</Link>
              </MenuItem>
            ))}
        </>
      )}
    />
  </ul>
)

export default MobileMenu
