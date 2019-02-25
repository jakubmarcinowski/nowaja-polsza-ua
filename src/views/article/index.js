import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import Line from '../../components/Line'
import ImgWrapper from '../../components/ImgWrapper'
import Wrapper from '../../components/Wrapper'
import Header from '../../components/Header'
import Author from '../../components/Author'
import { articleType } from '../../types/article'
import { mediaQueries } from '../../utils/mediaQueries'
import RecommendedArticles from '../../components/RecommendedArticles'

const StyledHeroImage = styled.div`
  width: 80%;
  margin: auto;
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
    margin: -5rem;
    padding: 5rem;
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
  article: { title, heroImage, publishDate, body, authors },
  posts,
}) => (
  <article>
    <StyledHeroImage>
      <ImgWrapper img={heroImage} />
    </StyledHeroImage>
    <Wrapper>
      <h1 className="section-headline">{title}</h1>
      <p>{publishDate}</p>
      {body && (
        <div
          dangerouslySetInnerHTML={{
            __html: body.childMarkdownRemark.html,
          }}
        />
      )}

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
        <HeaderStyled size="Biggest" margin>
          смотреть похожие посты
        </HeaderStyled>
        <Line />
        <RecommendedArticles posts={posts} />
      </SectionWrapper>
    </Wrapper>
  </article>
)

ArticlePage.propTypes = {
  article: articleType,
  posts: PropTypes.arrayOf(articleType),
}

export default ArticlePage
