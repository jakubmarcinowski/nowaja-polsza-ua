import React from 'react'
import PropTypes from 'prop-types'
import ArticleItem from '../components/ArticleItem'

const ArticlesList = ({ posts }) => (
  <ul className="article-list">
    {posts.map(({ node }) => {
      return (
        <li key={node.slug}>
          <ArticleItem article={node} />
        </li>
      )
    })}
  </ul>
)

ArticlesList.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      description: PropTypes.shape({
        childMarkdownRemark: PropTypes.shape({
          html: PropTypes.string,
        }),
      }),
      publishDate: PropTypes.string,
      slug: PropTypes.string,
      tags: PropTypes.arrayOf(PropTypes.string),
      title: PropTypes.string,
    })
  ),
}

export default ArticlesList
