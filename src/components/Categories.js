import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

const StyledCategories = styled.nav`
  display: flex;
  justify-content: center;
  margin-right: -4rem;
  list-style: none;
  text-transform: uppercase;
  font-size: 1.8rem;
`

const Category = styled.li`
  margin-right: 4rem;
  letter-spacing: 0.7px;
  color: ${props => props.theme.colors.white};

  &:hover {
    color: ${props => props.theme.colors.highlighted[props.color]};
  }
`

export const categoriesQuery = graphql`
  query CategoriesQuery {
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

const Categories = () => (
  <StaticQuery
    query={categoriesQuery}
    render={({ allContentfulCategory }) => (
      <StyledCategories>
        {allContentfulCategory &&
          allContentfulCategory.edges &&
          allContentfulCategory.edges.map(({ node }) => (
            <Category key={node.slug} color={node.color}>
              <Link to={`category/${node.slug}`}>{node.title}</Link>
            </Category>
          ))}
      </StyledCategories>
    )}
  />
)

export default Categories
