import React from 'react'
import PropTypes from 'prop-types'

import HighlightedArticle from './subcomponents/HighlightedArticle'
import ArticlesList from '../../components/ArticlesList'
import Wrapper from '../../components/Wrapper'
import { articleType } from '../../types/article'

const HomePage = ({ posts, highlightedPost }) => (
  <>
    <HighlightedArticle post={highlightedPost} />
    <Wrapper>
      <ArticlesList posts={posts} />
    </Wrapper>
  </>
)

HomePage.propTypes = {
  posts: PropTypes.arrayOf(articleType),
  highlightedPost: articleType,
}

export default HomePage
