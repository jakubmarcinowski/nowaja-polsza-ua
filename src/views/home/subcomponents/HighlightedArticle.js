import React from 'react'
import styled from 'styled-components'

import ImgWrapper from '../../../components/ImgWrapper'
import { articleType } from '../../../types/article'
import { Link } from 'gatsby'
import { mediaQueries } from '../../../utils/mediaQueries'
import Header from '../../../components/Header'

const HighlightedArticleStyled = styled.div`
  position: relative;

  @media ${mediaQueries.large} {
    width: calc(100% * 7 / 12);
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: ${({ theme }) => theme.gradients.default};
  }
`
const ArticleContent = styled.div`
  position: absolute;
  z-index: 1;
  bottom: 3rem;
  left: 0;
  right: 0;
  text-align: center;
`

const HighlightedArticle = ({ post: { title, slug, heroImage, author } }) => (
  <HighlightedArticleStyled>
    <ImgWrapper img={heroImage} />
    <ArticleContent>
      <Header size="Big" color="white" type={2} margin="0 0 1rem" weight="Bold">
        <Link to={`/blog/${slug}`}>{title}</Link>
      </Header>
      <Header size="Medium" color="white" type={5} weight="Bold">
        <Link to={`/author/${author.slug}`}>{author.name}</Link>
      </Header>
    </ArticleContent>
  </HighlightedArticleStyled>
)

HighlightedArticle.propTypes = {
  post: articleType,
}

export default HighlightedArticle
