import React from 'react'
import PropTypes from 'prop-types'

import HighlightedArticle from './subcomponents/HighlightedArticle'
import ArticlesList from '../../components/ArticlesList'
import Wrapper from '../../components/Wrapper'
import { articleType } from '../../types/article'
import TheNewestList from './subcomponents/TheNewestList'
import Hero from './subcomponents/Hero'
import Line from '../../components/Line'
import { highlightedEventType } from '../../types/highlightedEvent'
import ImportantInfo from './subcomponents/ImportantInfo'

const HomePage = ({
  posts,
  highlightedPost,
  isNotLarge,
  highlightedEvents,
  importantInfo,
}) => {
  const promotedPostsNumber = isNotLarge ? 0 : 2
  const promotedPosts = posts.slice(0, promotedPostsNumber)
  const commonPosts = posts.slice(promotedPostsNumber, posts.length)

  return (
    <>
      <Wrapper>
        {importantInfo && importantInfo.importantInfo && (
          <ImportantInfo importantInfo={importantInfo} />
        )}
        <Hero>
          <HighlightedArticle post={highlightedPost} />
          {!isNotLarge && <TheNewestList posts={promotedPosts} />}
        </Hero>
        <Line />
        <ArticlesList
          posts={commonPosts}
          limit={6}
          initialLimit={9}
          highlightedEvents={highlightedEvents}
        />
      </Wrapper>
    </>
  )
}

HomePage.propTypes = {
  posts: PropTypes.arrayOf(articleType),
  highlightedEvents: PropTypes.arrayOf(highlightedEventType),
  highlightedPost: articleType,
  isNotLarge: PropTypes.bool,
  importantInfo: PropTypes.any,
}

export default HomePage
