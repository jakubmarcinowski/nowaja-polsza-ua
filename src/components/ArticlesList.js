import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import ArticleItem from '../components/ArticleItem'
import { articleType } from '../types/article'

const StyledList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(420px, 1fr));
  grid-gap: 5vmin;
`

const ArticlesList = ({ posts }) => (
  <StyledList>
    {posts.map(({ node }) => {
      return (
        <li key={node.slug}>
          <ArticleItem article={node} />
        </li>
      )
    })}
  </StyledList>
)

ArticlesList.propTypes = {
  posts: PropTypes.arrayOf(articleType),
}

export default ArticlesList
