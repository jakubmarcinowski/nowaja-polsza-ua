import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import ArticleItem from '../../../components/ArticleItem'

const HighlightedArticleStyled = styled.div`
  width: 80%;
  padding: 24px;
  border: 1px solid black;
  margin: auto;
`

const HighlightedArticle = ({ post }) => (
  <HighlightedArticleStyled>
    <ArticleItem article={post} />
  </HighlightedArticleStyled>
)

HighlightedArticle.propTypes = {
  post: PropTypes.shape({
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
    tags: PropTypes.arrayOf(PropTypes.string),
    title: PropTypes.string,
  }),
}

export default HighlightedArticle
