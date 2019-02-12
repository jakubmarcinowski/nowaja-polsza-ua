import React from 'react'
import PropTypes from 'prop-types'

import HighlightedArticle from './subcomponents/HighlightedArticle'
import ArticlesList from '../../components/ArticlesList'

const HomePage = ({ posts, highlightedPost }) => (
  <>
    <HighlightedArticle post={highlightedPost} />
    <div className="wrapper">
      <ArticlesList posts={posts} />
    </div>
  </>
)

HomePage.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
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
    })
  ),
  highlightedPost: PropTypes.shape({
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

export default HomePage
