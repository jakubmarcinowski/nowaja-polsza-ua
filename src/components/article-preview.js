import React from 'react'
import { Link } from 'gatsby'
import ImgValidator from '../components/ImgValidator'
import PropTypes from 'prop-types'

import styles from './article-preview.module.css'

const ArticlePreview = ({ article }) => {
  return (
    <div className={styles.preview}>
      <ImgValidator img={article.heroImage} />
      <h3 className={styles.previewTitle}>
        <Link to={`/blog/${article.slug}`}>{article.title}</Link>
      </h3>
      <small>{article.publishDate}</small>
      <div
        dangerouslySetInnerHTML={{
          __html: article.description.childMarkdownRemark.html,
        }}
      />
    </div>
  )
}

ArticlePreview.propTypes = {
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

export default ArticlePreview
