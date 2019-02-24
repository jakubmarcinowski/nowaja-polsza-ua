import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import get from 'lodash/get'

import Layout from '../components/Layout'
import ArticlePage from '../views/article.js'

const ArticleTemplate = props => {
  const post = get(props, 'data.contentfulBlogPost')
  const siteTitle = get(props, 'data.site.siteMetadata.title')
  return (
    <Layout>
      {post && (
        <>
          <Helmet title={`${post.title} | ${siteTitle}`} />
          <ArticlePage article={post} />
        </>
      )}
    </Layout>
  )
}

export default ArticleTemplate

export const pageQuery = graphql`
  query BlogPostByContentfulId($contentful_id: String!) {
    site {
      siteMetadata {
        title
      }
    }
    contentfulBlogPost(contentful_id: { eq: $contentful_id }) {
      title
      publishDate(formatString: "DD MMMM YYYY", locale: "ru-RU")
      heroImage {
        fluid(maxWidth: 1920, background: "rgb:000000") {
          ...GatsbyContentfulFluid
        }
      }
      body {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
