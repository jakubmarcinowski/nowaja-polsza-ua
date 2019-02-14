import React from 'react'
import PropTypes from 'prop-types'

import HighlightedArticle from './subcomponents/HighlightedArticle'
import ArticlesList from '../../components/ArticlesList'
import Wrapper from '../../components/Wrapper'
import { articleType } from '../../types/article'

const HomePage = ({ posts, highlightedPost }) => (
  <>
    <HighlightedArticle post={highlightedPost} />
    Highlighted articles (only three newest):
    <Wrapper>
      <ArticlesList posts={posts.slice(0, 3)} initialLimit={3} fixedNumber />
    </Wrapper>
    List of articles (rest of articles):
    <Wrapper>
      <ArticlesList
        posts={posts.slice(3, posts.length)}
        limit={1}
        initialLimit={1}
      />
    </Wrapper>
  </>
)

HomePage.propTypes = {
  posts: PropTypes.arrayOf(articleType),
  highlightedPost: articleType,
}

export default HomePage
