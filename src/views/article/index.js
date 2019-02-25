import React from 'react'
import styled from 'styled-components'

import { articleType } from '../../types/article'
import PageHeader from './subcomponents/PageHeader'
import { mediaQueries } from '../../utils/mediaQueries'
import Content from './subcomponents/Content'
import Wrapper from '../../components/Wrapper'

const StyledArticle = styled.article`
  padding: 2rem 0;
  @media ${mediaQueries.tablet} {
    padding: 5rem 0;
  }
`

const ArticlePage = ({
  article: { body, title, publishDate, heroImage, authors, categories },
}) => (
  <StyledArticle>
    <Wrapper>
      <PageHeader
        title={title}
        publishDate={publishDate}
        heroImage={heroImage}
        authors={authors}
        categories={categories}
      />
    </Wrapper>
    {body && (
      <Wrapper size="Small" position="relative">
        <Content html={body.childMarkdownRemark.html} />
      </Wrapper>
    )}
  </StyledArticle>
)

ArticlePage.propTypes = {
  article: articleType,
}

export default ArticlePage
