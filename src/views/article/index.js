import React from 'react'
import styled from 'styled-components'

import { articleType } from '../../types/article'
import PageHeader from './subcomponents/PageHeader'
import { mediaQueries } from '../../utils/mediaQueries'
import ArticleSocialMediaList from './subcomponents/ArticleSocialMediaList'
import Header from '../../components/Header'
import Author from '../../components/Author'

const StyledArticle = styled.article`
  padding: 2rem 0;
  @media ${mediaQueries.tablet} {
    padding: 5rem 0;
  }
`

const HeaderStyled = styled(Header)`
  text-align: center;
`

const Authors = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: -2rem;
  padding: 2rem;

  @media ${mediaQueries.tablet} {
    margin: -5rem;
    padding: 5rem;
  }
`

const ArticlePage = ({
  article: { body, title, publishDate, heroImage, authors, categories },
}) => (
  <StyledArticle>
    <PageHeader
      title={title}
      publishDate={publishDate}
      heroImage={heroImage}
      authors={authors}
      categories={categories}
    />
    <ArticleSocialMediaList />
    {body && (
      <div
        dangerouslySetInnerHTML={{
          __html: body.childMarkdownRemark.html,
        }}
      />
    )}
    <ArticleSocialMediaList />
    <HeaderStyled size="Biggest">об авторе</HeaderStyled>
    {authors && authors.length > 1 ? (
      <Authors>
        {authors.map(element => (
          <Author author={element} key={element.id} few />
        ))}
      </Authors>
    ) : (
      <Author author={authors[0]} />
    )}
  </StyledArticle>
)

ArticlePage.propTypes = {
  article: articleType,
}

export default ArticlePage
