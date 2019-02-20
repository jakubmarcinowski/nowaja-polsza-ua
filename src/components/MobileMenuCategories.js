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

  &:hover {
    color: ${props => props.theme.colors.highlighted[props.color]};
  }
`

const categoriesQuery = graphql`
  query CategoriesMobileQuery {
    allContentfulCategory {
      edges {
        node {
          id
          slug
          title
          color
        }
      }
    }
  }
`

const MobileMenu = () => (
  <ul>
    <StaticQuery
      query={categoriesQuery}
      render={({ allContentfulCategory }) => (
        <>
          {allContentfulCategory &&
            allContentfulCategory.edges &&
            allContentfulCategory.edges.map(({ node }) => (
              <MenuItem key={node.slug} color={node.color}>
                <Link to={`category/${node.slug}`}>{node.title}</Link>
              </MenuItem>
            ))}
        </>
      )}
    />
  </ul>
)

export default MobileMenu
