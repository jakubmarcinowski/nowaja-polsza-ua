import React from 'react'
import { Link } from 'gatsby'
import ImgValidator from './ImgValidator'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledPreview = styled.div`
  .previewTitle {
    font-size: 1.5em;
  }

  .tag {
    color: #a0a0a0;
    text-decoration: none;
    display: inline-block;
    padding: 0.33333rem 0.5rem;
    line-height: 1;
    border-radius: 2px;
    border: 1px solid #a0a0a0;
    margin-right: 0.5em;
  }
`

const ArticleItem = ({ article }) => {
  return (
    <StyledPreview>
      <ImgValidator img={article.heroImage} />
      <h3 className="previewTitle">
        <Link to={`/blog/${article.slug}`}>{article.title}</Link>
      </h3>
      <small>{article.publishDate}</small>
      <div
        dangerouslySetInnerHTML={{
          __html: article.description.childMarkdownRemark.html,
        }}
      />
      <Link to={`/author/${article.author.slug}`}>{article.author.name}</Link>
      <ul>
        {article.categories.map(category => (
          <li key={category.slug}>
            <Link to={`/category/${category.slug}`}>{category.title}</Link>
          </li>
        ))}
      </ul>
    </StyledPreview>
  )
}

ArticleItem.propTypes = {
  article: PropTypes.shape({
    description: PropTypes.shape({
      childMarkdownRemark: PropTypes.shape({
        html: PropTypes.string,
      }),
    }),
    publishDate: PropTypes.string,
    slug: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string),
    title: PropTypes.string,
  }),
}

export default ArticleItem
