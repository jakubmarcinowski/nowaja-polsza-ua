import React from 'react'
import styled from 'styled-components'

import ImgWrapper from '../../../components/ImgWrapper'
import { articleType } from '../../../types/article'
import { Link } from 'gatsby'

const HighlightedArticleStyled = styled.div`
  position: relative;
  width: calc(100% * 7 / 12);
  color: ${props => props.theme.colors.white};
  font-weight: bold;

  /* TODO replace by header later */
  h2 {
    font-size: 3rem;
    margin-bottom: 1rem;
  }

  h5 {
    font-size: 1.6rem;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(
      to bottom,
      rgba(17, 29, 34, 0.02),
      rgba(17, 29, 34, 0.19) 39%,
      rgba(17, 29, 34, 0.86)
    );
  }
`
const ArticleContent = styled.div`
  position: absolute;
  z-index: 1;
  bottom: 10%;
  left: 0;
  right: 0;
  transform: translate(0, -50%);
  text-align: center;
`

const HighlightedArticle = ({ post: { title, slug, heroImage, author } }) => (
  <HighlightedArticleStyled>
    <ImgWrapper img={heroImage} />
    <ArticleContent>
      <h2>
        <Link to={`/blog/${slug}`}>{title}</Link>
      </h2>
      <h5>
        <Link to={`/author/${author.slug}`}>{author.name}</Link>
      </h5>
    </ArticleContent>
  </HighlightedArticleStyled>
)

HighlightedArticle.propTypes = {
  post: articleType,
}

export default HighlightedArticle
