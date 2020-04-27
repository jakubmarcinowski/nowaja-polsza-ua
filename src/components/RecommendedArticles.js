import React from 'react'
import PropTypes from 'prop-types'
import ArticlesList from 'components/ArticlesList'

import { articleType } from 'types/article'

const RecommendedArticles = ({ posts }) => (
  <ArticlesList posts={posts} initialLimit={2} size="Big" />
)

RecommendedArticles.propTypes = {
  posts: PropTypes.arrayOf(articleType).isRequired,
}

export default RecommendedArticles
