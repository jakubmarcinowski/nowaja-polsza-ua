import React from 'react'
import PropTypes from 'prop-types'

import HighlightedArticle from './subcomponents/HighlightedArticle'
import ArticlesList from '../../components/ArticlesList'
import Wrapper from '../../components/Wrapper'
import { articleType } from '../../types/article'
import TheNewestList from './subcomponents/TheNewestList'
import Hero from './subcomponents/Hero'
import Line from '../../components/Line'

const HomePage = ({ posts, highlightedPost, isSmallerScreen }) => {
  const promotedPostsNumber = isSmallerScreen ? 0 : 2
  const promotedPosts = posts.slice(0, promotedPostsNumber)
  const commonPosts = posts.slice(promotedPostsNumber, posts.length)

  return (
    <>
      <Wrapper>
        <Hero>
          <HighlightedArticle post={highlightedPost} />
          {!isSmallerScreen && <TheNewestList posts={promotedPosts} />}
        </Hero>
        <Line />
        <ArticlesList posts={commonPosts} limit={6} initialLimit={9} />
      </Wrapper>
    </>
  )
}

HomePage.propTypes = {
  posts: PropTypes.arrayOf(articleType),
  highlightedPost: articleType,
  isSmallerScreen: PropTypes.bool,
}

export default HomePage
