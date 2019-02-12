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
    <ImgValidator img={heroImage} />
    <h3 className="previewTitle">
      <Link to={`/blog/${slug}`}>{title}</Link>
    </h3>
    <small>{publishDate}</small>
    <div
      dangerouslySetInnerHTML={{
        __html: description.childMarkdownRemark.html,
      }}
    />
    <Link to={`/author/${author.slug}`}>{author.name}</Link>
    <ul>
      {categories.map(category => (
        <li key={category.slug}>
          <Link to={`/category/${category.slug}`}>{category.title}</Link>
        </li>
      ))}
    </ul>
  </StyledPreview>
)

ArticleItem.propTypes = {
  article: PropTypes.shape({
    author: PropTypes.shape({
      name: PropTypes.string,
      slug: PropTypes.string,
    }),
    categories: PropTypes.arrayOf(
      PropTypes.shape({ title: PropTypes.string, slug: PropTypes.string })
    ),
    description: PropTypes.shape({
      childMarkdownRemark: PropTypes.shape({
        html: PropTypes.string,
      }),
    }),
    heroImage: PropTypes.shape({
      fluid: PropTypes.shape({
        aspectRatio: PropTypes.number,
        base64: PropTypes.string,
        sizes: PropTypes.string,
        src: PropTypes.string,
        srcSet: PropTypes.string,
      }),
    }),
    publishDate: PropTypes.string,
    slug: PropTypes.string,
    title: PropTypes.string,
  }),
}

export default ArticleItem
