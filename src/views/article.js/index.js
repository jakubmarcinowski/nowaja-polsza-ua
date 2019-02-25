import React from 'react'
import styled from 'styled-components'

import { articleType } from '../../types/article'
import Hero from './subcomponents/Hero'
import { mediaQueries } from '../../utils/mediaQueries'

const StyledArticle = styled.article`
  padding: 2rem 0;
  @media ${mediaQueries.tablet} {
    padding: 5rem 0;
  }
`

const ArticlePage = ({ article, article: { body } }) => (
  <StyledArticle>
    <Hero article={article} />
    {body && (
      <div
        dangerouslySetInnerHTML={{
          __html: body.childMarkdownRemark.html,
        }}
      />
    )}
  </StyledArticle>
)

ArticlePage.propTypes = {
  article: articleType,
}

export default ArticlePage
