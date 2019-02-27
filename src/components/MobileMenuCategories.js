import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { Link, StaticQuery } from 'gatsby'

const MenuItem = styled.li`
  padding-bottom: 25px;
  line-height: 1.2;
  letter-spacing: 0.6px;
  font-size: 1.6rem;
  color: ${props =>
    props.currentCategory
      ? props.theme.colors.highlighted[props.currentCategory.color]
      : props.theme.colors.white};

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

const MobileMenu = ({ currentCategory }) => (
  <ul>
    <StaticQuery
      query={categoriesQuery}
      render={({ allContentfulCategory }) => (
        <>
          {allContentfulCategory &&
            allContentfulCategory.edges &&
            allContentfulCategory.edges.map(({ node }) => (
              <MenuItem
                key={node.slug}
                color={node.color}
                currentCategory={
                  currentCategory &&
                  node.slug === currentCategory.slug &&
                  currentCategory
                }
              >
                <Link to={`category/${node.slug}`}>{node.title}</Link>
              </MenuItem>
            ))}
        </>
      )}
    />
  </ul>
)

MobileMenu.propTypes = {
  currentCategory: PropTypes.any,
}

export default MobileMenu
