import React from 'react'
import styled from 'styled-components'

import ImgWrapper from '../../components/ImgWrapper'
import Wrapper from '../../components/Wrapper'
import Header from '../../components/Header'
import Author from '../../components/Author'
import { articleType } from '../../types/article'
import PageHeader from './subcomponents/PageHeader'
import { mediaQueries } from '../../utils/mediaQueries'
import Content from './subcomponents/Content'

const StyledArticle = styled.article`
  padding: 2rem 0;
`

const StyledHeroImage = styled.div`
  width: 80%;
  margin: auto;
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
  article: { title, heroImage, publishDate, body, authors, categories },
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
