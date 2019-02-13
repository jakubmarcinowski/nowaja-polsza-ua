import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import { articleType } from '../types/article'
import ImgWrapper from './ImgWrapper'

const StyledPreview = styled.div`
  .title {
    font-size: 1.5em;
  }

  .subtitle {
    font-weight: 800;
    margin: 0;
    font-size: 1em;
  }

  ul {
    margin: 0;
    padding: 0;
  }
`

const ArticleItem = ({
  article: {
    title,
    description,
    slug,
    author,
    categories,
    heroImage,
    publishDate,
  },
}) => (
  <StyledPreview>
    <ImgWrapper img={heroImage} />
    <h3 className="title">
      <Link to={`/blog/${slug}`}>{title}</Link>
    </h3>
    <small>{publishDate}</small>
    <div
      dangerouslySetInnerHTML={{
        __html: description.childMarkdownRemark.html,
      }}
    />
    <div>
      <h6 className="subtitle">Autor:</h6>
      <Link to={`/author/${author.slug}`}>{author.name}</Link>
    </div>
    <div>
      <h6 className="subtitle">Kategorie:</h6>
      <ul>
        {categories &&
          categories.map(category => (
            <li key={category.slug}>
              <Link to={`/category/${category.slug}`}>{category.title}</Link>
            </li>
          ))}
      </ul>
    </div>
  </StyledPreview>
)

ArticleItem.propTypes = {
  article: articleType,
}

export default ArticleItem
