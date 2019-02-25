import React from 'react'
import styled from 'styled-components'

import ImgWrapper from '../../components/ImgWrapper'
import Wrapper from '../../components/Wrapper'
import Header from '../../components/Header'
import Author from '../../components/Author'
import { articleType } from '../../types/article'
import { mediaQueries } from '../../utils/mediaQueries'
import ArticleSocialMediaList from './subcomponents/ArticleSocialMediaList'

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
  article: { title, heroImage, publishDate, body, authors },
}) => (
  <article>
    <StyledHeroImage>
      <ImgWrapper img={heroImage} />
    </StyledHeroImage>
    <ArticleSocialMediaList />
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
    </Wrapper>
  </article>
)

ArticlePage.propTypes = {
  article: articleType,
}

export default ArticlePage
