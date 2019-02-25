import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import ArticlesList from './ArticlesList'

import { articleType } from '../types/article'

const Element = styled.div``

const RecommendedArticles = ({ posts }) => (
  <Element>
    <ArticlesList posts={posts} initialLimit={2} />
  </Element>
)

RecommendedArticles.propTypes = {
  posts: PropTypes.arrayOf(articleType).isRequired,
}

export default RecommendedArticles
