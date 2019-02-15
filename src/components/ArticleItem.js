import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import { articleType } from '../types/article'
import ImgWrapper from './ImgWrapper'

const StyledArticleItem = styled.div`
  .img-box {
    position: relative;
    margin-bottom: 3.6rem;
  }
  .category {
    a {
      position: absolute;
      top: 7px;
      left: -3px;
      color: #fff;
      background: ${props => props.theme.rouge};
      padding: 0.5rem;
      transition: opacity 0.3s ease;
      &:hover {
        opacity: 0.9;
      }
    }
  }
  .date {
    margin: 0 2.4rem 0.5rem 0;
  }
  .info-box {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }
  .author {
    color: ${props => props.theme.plum};
    font-weight: bold;
    margin-bottom: 0.5rem;
    transition: opacity 0.3s ease;
    a {
      color: currentColor;
      &:hover {
        opacity: 0.9;
      }
    }
  }
  .title {
    font-size: 2.6rem;
    margin: 1rem 0;
    transition: opacity 0.3s ease;
    &:hover {
      opacity: 0.9;
    }
  }
`

const ArticleItem = ({
  article: { title, slug, author, categories, heroImage, publishDate },
}) => (
  <StyledArticleItem>
    <div className="img-box">
      <Link to={`/blog/${slug}`}>
        <ImgWrapper img={heroImage} />
      </Link>
      {categories && (
        <div className="category">
          <Link to={`/category/${categories[0].slug}`}>
            {categories[0].title}
          </Link>
        </div>
      )}
    </div>
    <div className="info-box">
      {publishDate && <div className="date">{publishDate}</div>}
      {author && (
        <div className="author">
          <Link to={`/author/${author.slug}`}>{author.name}</Link>
        </div>
      )}
    </div>
    {slug && (
      <h3 className="title">
        <Link to={`/blog/${slug}`}>{title}</Link>
      </h3>
    )}
  </StyledArticleItem>
)

ArticleItem.propTypes = {
  article: articleType,
}

export default ArticleItem
