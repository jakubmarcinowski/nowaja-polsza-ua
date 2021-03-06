import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { mediaQueries } from 'utils/mediaQueries'

const StyledCategories = styled.nav`
  display: flex;
  justify-content: center;
  margin-right: -2rem;
  list-style: none;
  text-transform: uppercase;
  font-size: 1.4rem;

  @media ${mediaQueries.desktop} {
    margin-right: -4rem;
    font-size: 1.6rem;
  }
`

const StyledCategoriesUnorderedList = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
`

const Category = styled.li`
  margin-right: 2rem;
  transition: color ${props => props.theme.animations.default};
  letter-spacing: 0.7px;
  color: ${props =>
    props.currentCategory
      ? props.theme.colors.highlighted[props.currentCategory.color]
      : props.theme.colors.white};

  &:last-child {
    margin-right: 0;
  }

  &:hover {
    color: ${props => props.theme.colors.highlighted[props.color]};
  }

  @media ${mediaQueries.desktop} {
    margin-right: 4rem;
  }
`

const categoriesQuery = graphql`
  query CategoriesQuery {
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

const Categories = ({ currentCategory }) => (
  <StaticQuery
    query={categoriesQuery}
    render={({ allContentfulCategory }) => (
      <StyledCategories>
        <StyledCategoriesUnorderedList>
          {allContentfulCategory &&
            allContentfulCategory.edges &&
            allContentfulCategory.edges.map(({ node }) => {
              if (node.slug === 'mediateka') return null

              return (
                <Category
                  key={node.slug}
                  color={node.color}
                  currentCategory={
                    currentCategory &&
                    node.slug === currentCategory.slug &&
                    currentCategory
                  }
                >
                  <Link to={`/category/${node.slug}`}>{node.title}</Link>
                </Category>
              )
            })}
        </StyledCategoriesUnorderedList>
      </StyledCategories>
    )}
  />
)

Categories.propTypes = {
  currentCategory: PropTypes.any,
}
export default Categories
