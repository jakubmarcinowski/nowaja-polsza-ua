import React from 'react'
import styled from 'styled-components'

import Wrapper from '../../components/Wrapper'
import Header from '../../components/Header'
import Author from '../../components/Author'
import { articleType } from '../../types/article'
import ArticleHeader from './subcomponents/ArticleHeader'
import { mediaQueries } from '../../utils/mediaQueries'
import Content from './subcomponents/Content'

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
    margin: -4rem;
    padding: 4rem;
  }
`

const ArticlePage = ({
  article: { title, heroImage, publishDate, body, authors, categories },
}) => (
  <StyledArticle>
    <Wrapper>
      <ArticleHeader
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
    <Wrapper>
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
    </Wrapper>
  </StyledArticle>
)

ArticlePage.propTypes = {
  article: articleType,
}

export default ArticlePage
