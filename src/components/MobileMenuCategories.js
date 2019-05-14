import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { Link, StaticQuery } from 'gatsby'

const MenuItem = styled.li`
  padding-bottom: 25px;
  transition: color ${props => props.theme.animations.default};
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
    allContentfulCategory(
      filter: { slug: { ne: "xxx" } }
      sort: { fields: [order], order: ASC }
    ) {
      edges {
        node {
          id
          slug
          title
          color
          order
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
            allContentfulCategory.edges.map(({ node }) => {
              if (node.slug === 'mediateka') return null

              return (
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
              )
            })}
        </>
      )}
    />
  </ul>
)

MobileMenu.propTypes = {
  currentCategory: PropTypes.any,
}

export default MobileMenu
