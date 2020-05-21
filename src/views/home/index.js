import React from 'react'
import PropTypes from 'prop-types'

import HighlightedArticle from './subcomponents/HighlightedArticle'
import ArticlesList from 'components/ArticlesList'
import Wrapper from 'components/Wrapper'
import { articleType } from 'types/article'
import TheNewestList from './subcomponents/TheNewestList'
import Hero from './subcomponents/Hero'
import Line from 'components/Line'
import ImportantInfo from './subcomponents/ImportantInfo'

const HomePage = ({
  posts,
  highlightedPost,
  stickedPost,
  stickedPostActive,
  importantInfo,
  prevPagePath,
  nextPagePath,
}) => {
  const promotedPostsNumber = 4
  const promotedPosts = posts.slice(0, promotedPostsNumber)
  const otherPosts = posts.slice(promotedPosts)

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
          posts={otherPosts}
          limit={6}
          initialLimit={stickedPostActive ? 15 : 16}
          stickedPost={stickedPost}
          stickedPostActive={stickedPostActive}
          isOnHomepage
          prevPagePath={prevPagePath}
          nextPagePath={nextPagePath}
        />
      </Wrapper>
    </>
  )
}

HomePage.propTypes = {
  posts: PropTypes.arrayOf(articleType),
  stickedPost: PropTypes.object,
  stickedPostActive: PropTypes.bool,
  highlightedPost: articleType,
  isNotLarge: PropTypes.bool,
  importantInfo: PropTypes.any,
  prevPagePath: PropTypes.string,
  nextPagePath: PropTypes.string,
}

export default HomePage
