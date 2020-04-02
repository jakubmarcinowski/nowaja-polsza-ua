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
  stickedPost,
  importantInfo,
}) => {
  const promotedPostsNumber = 4
  const promotedPosts = posts.slice(0, promotedPostsNumber)
  return (
    <>
      {importantInfo &&
        importantInfo.importantInfoStatus &&
        importantInfo.importantInfoStatus !== 'hidden' && (
          <ImportantInfo importantInfo={importantInfo} />
        )}
      <Wrapper>
        <Hero>
          <HighlightedArticle post={highlightedPost} />
          <TheNewestList posts={promotedPosts} />
        </Hero>
        <Line />
        <ArticlesList
          posts={posts}
          limit={6}
          initialLimit={stickedPost ? 13 : 14}
          stickedPost={stickedPost}
          isOnHomepage
        />
      </Wrapper>
    </>
  )
}

HomePage.propTypes = {
  posts: PropTypes.arrayOf(articleType),
  stickedPost: PropTypes.object,
  highlightedPost: articleType,
  isNotLarge: PropTypes.bool,
  importantInfo: PropTypes.any,
}

export default HomePage
