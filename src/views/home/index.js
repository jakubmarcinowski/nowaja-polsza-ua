import React from 'react'
import PropTypes from 'prop-types'

import HighlightedArticle from './subcomponents/HighlightedArticle'
import ArticlesList from '../../components/ArticlesList'
import Wrapper from '../../components/Wrapper'
import { articleType } from '../../types/article'

const HomePage = ({ posts, highlightedPost, isMobileView }) => {
  const promotedPostsNumber = isMobileView ? 0 : 2
  const promotedPosts = posts.slice(0, promotedPostsNumber)
  const commonPosts = posts.slice(promotedPostsNumber, posts.length)

  return (
    <>
      <Wrapper>
        <HighlightedArticle post={highlightedPost} />
        <ArticlesList posts={promotedPosts} />
        <ArticlesList posts={commonPosts} limit={6} initialLimit={9} />
      </Wrapper>
    </>
  )
}

HomePage.propTypes = {
  posts: PropTypes.arrayOf(articleType),
  highlightedPost: articleType,
  isMobileView: PropTypes.bool,
}

export default HomePage
