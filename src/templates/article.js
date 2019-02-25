import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import get from 'lodash/get'

import Layout from '../components/Layout'
import ArticlePage from '../views/article/index'

const ArticleTemplate = props => {
  const post = get(props, 'data.contentfulBlogPost')
  const siteTitle = get(props, 'data.site.siteMetadata.title')
  const test = get(props, 'data.allContentfulBlogPost')

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
  query BlogPostByContentfulId(
    $contentful_id: String
    $categories_contentful_ids: [String]
  ) {
    site {
      siteMetadata {
        title
      }
    }

    allContentfulBlogPost(
      filter: {
        categories: {
          elemMatch: { contentful_id: { in: [$categories_contentful_ids] } }
        }
      }
      sort: { fields: [publishDate], order: DESC }
    ) {
      edges {
        node {
          title
          slug
          contentful_id
          categories {
            id
            contentful_id
          }
        }
      }
    }

    contentfulBlogPost(contentful_id: { eq: $contentful_id }) {
      title
      authors {
        name
        slug
      }
      categories {
        title
        slug
        color
      }
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
      authors {
        id
        name
        slug
        shortBio {
          childMarkdownRemark {
            html
            excerpt
          }
        }
        image {
          fluid(maxWidth: 480) {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  }
`
