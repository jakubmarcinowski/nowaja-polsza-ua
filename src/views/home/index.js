import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import HighlightedArticle from './subcomponents/HighlightedArticle'
import ArticlesList from '../../components/ArticlesList'
import Wrapper from '../../components/Wrapper'
import { articleType } from '../../types/article'
import TheNewestList from './subcomponents/TheNewestList'
import Hero from './subcomponents/Hero'
import Line from '../../components/Line'
import { highlightedEventType } from '../../types/highlightedEvent'
import ImportantInfo from './subcomponents/ImportantInfo'
import { mediaQueries } from '../../utils/mediaQueries'

const TheNewestListContainer = styled.div`
  display: none;

  @media ${mediaQueries.large} {
    display: block;
    width: 100%;
  }
`

const HomePage = ({
  posts,
  highlightedPost,
  highlightedEvents,
  importantInfo,
}) => {
  const promotedPostsNumber = 2
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
          <TheNewestListContainer>
            <TheNewestList posts={promotedPosts} />
          </TheNewestListContainer>
        </Hero>
        <Line />
        <ArticlesList
          posts={posts}
          limit={6}
          initialLimit={14}
          highlightedEvents={highlightedEvents}
          isOnHomepage
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
