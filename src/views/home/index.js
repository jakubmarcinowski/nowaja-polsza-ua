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
import { breakpoints } from '../../utils/mediaQueries'

class HomePage extends React.Component {
  state = {
    isNotLarge: true,
  }

  componentDidMount() {
    console.log('did mount')
    if (window.innerWidth < breakpoints.large) {
      this.setState({ isNotLarge: true })
    }
  }

  isLargeScreen = () => {
    if (window.innerWidth < breakpoints.large) {
      // this.setState({ isNotLarge: true })
      return true
    }
    return false
  }

  render() {
    const {
      posts,
      highlightedPost,
      highlightedEvents,
      importantInfo,
    } = this.props
    // const { isNotLarge } = this.state

    const promotedPostsNumber = this.isLargeScreen() ? 0 : 2
    const promotedPosts = posts.slice(0, promotedPostsNumber)
    const commonPosts = posts.slice(promotedPostsNumber, posts.length)

    return (
      <>
        <Wrapper>
          {importantInfo &&
            importantInfo.importantInfoStatus &&
            importantInfo.importantInfoStatus !== 'hidden' && (
              <ImportantInfo importantInfo={importantInfo} />
            )}
          <Hero>
            <HighlightedArticle post={highlightedPost} />
            <TheNewestListContainer>
              <TheNewestList posts={promotedPosts} />
            </TheNewestListContainer>
            {!this.isLargeScreen() && <TheNewestList posts={promotedPosts} />}
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
}

HomePage.propTypes = {
  posts: PropTypes.arrayOf(articleType),
  highlightedEvents: PropTypes.arrayOf(highlightedEventType),
  highlightedPost: articleType,
  isNotLarge: PropTypes.bool,
  importantInfo: PropTypes.any,
}

export default HomePage
