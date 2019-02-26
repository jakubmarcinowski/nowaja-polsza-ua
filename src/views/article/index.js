import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import ArticleSocialMediaList from './subcomponents/ArticleSocialMediaList'
import Author from '../../components/Author'
import Header from '../../components/Header'
import Line from '../../components/Line'
import PageHeader from './subcomponents/PageHeader'
import RecommendedArticles from '../../components/RecommendedArticles'
import Wrapper from '../../components/Wrapper'
import { articleType } from '../../types/article'
import { mediaQueries } from '../../utils/mediaQueries'

const StyledArticle = styled.article`
  padding: 2rem 0;

  @media ${mediaQueries.tablet} {
    padding: 5rem 0;
  }
`

const HeaderStyled = styled(Header)`
  margin-bottom: 1rem;
  text-align: center;

  @media ${mediaQueries.tablet} {
    margin-bottom: 3rem;
  }
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

const SectionWrapper = styled.div`
  margin: 10rem 0;

  @media ${mediaQueries.tablet} {
    margin: 10rem 0;
  }

  @media ${mediaQueries.desktop} {
    margin: 20rem 0;
  }

  &:last-child {
    margin-bottom: 0;
  }
`

const ArticlePage = ({
  article: { title, heroImage, publishDate, body, authors, categories },
  posts,
}) => (
  <StyledArticle>
    <PageHeader
      title={title}
      publishDate={publishDate}
      heroImage={heroImage}
      authors={authors}
      categories={categories}
    />
    <Wrapper>
      <h1 className="section-headline">{title}</h1>
      <p>{publishDate}</p>
      <ArticleSocialMediaList />
      {body && (
        <div
          dangerouslySetInnerHTML={{
            __html: body.childMarkdownRemark.html,
          }}
        />
      )}
      <ArticleSocialMediaList />

      <SectionWrapper>
        <HeaderStyled size="Biggest">об авторе</HeaderStyled>
        <Line />
        {authors && authors.length > 1 ? (
          <Authors>
            {authors.map(element => (
              <Author author={element} key={element.id} few />
            ))}
          </Authors>
        ) : (
          <Author author={authors[0]} />
        )}
      </SectionWrapper>

      <SectionWrapper>
        <HeaderStyled size="Biggest">смотреть похожие посты</HeaderStyled>
        <Line />
        <RecommendedArticles posts={posts} />
      </SectionWrapper>
    </Wrapper>
  </StyledArticle>
)

ArticlePage.propTypes = {
  article: articleType,
  posts: PropTypes.arrayOf(articleType),
}

export default ArticlePage
