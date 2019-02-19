import React from 'react'
import PropTypes from 'prop-types'

import HighlightedArticle from './subcomponents/HighlightedArticle'
import ArticlesList from '../../components/ArticlesList'
import Wrapper from '../../components/Wrapper'
import { articleType } from '../../types/article'

const HomePage = ({ posts, highlightedPost }) => {
  const promotedPostsNumber = 3
  const promotedPosts = posts.slice(0, promotedPostsNumber)
  const commonPosts = posts.slice(promotedPostsNumber, posts.length)

  return (
    <>
      <HighlightedArticle post={highlightedPost} />
      Highlighted articles (only three newest):
      <Wrapper>
        <ArticlesList posts={promotedPosts} />
      </Wrapper>
      List of articles (rest of articles):
      <Wrapper>
        <ArticlesList posts={commonPosts} limit={6} initialLimit={9} />
      </Wrapper>
    </>
  )
}

HomePage.propTypes = {
  posts: PropTypes.arrayOf(articleType),
  highlightedPost: articleType,
}

export default HomePage
