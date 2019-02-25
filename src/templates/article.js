import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import get from 'lodash/get'

import Layout from '../components/Layout'
import ArticlePage from '../views/article/index'

const ArticleTemplate = props => {
  const post = get(props, 'data.contentfulBlogPost')
  const siteTitle = get(props, 'data.site.siteMetadata.title')
  const posts = get(props, 'data.allContentfulBlogPost.edges')

  return (
    <Layout>
      {post && (
        <>
          <Helmet title={`${post.title} | ${siteTitle}`} />
          <ArticlePage article={post} posts={posts} />
        </>
      )}
    </Layout>
  )
}

export default ArticleTemplate

// (
//   $contentful_id: String
//   $categories_contentful_ids: [String]
// )

export const pageQuery = graphql`
  query BlogPostByContentfulId($contentful_id: String) {
    site {
      siteMetadata {
        title
      }
    }

    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
      edges {
        node {
          title
          lead
          slug
          authors {
            name
            slug
          }
          contentful_id
          categories {
            id
            contentful_id
            title
            color
          }
          heroImage {
            fluid(maxWidth: 800, background: "rgb:000000") {
              ...GatsbyContentfulFluid
            }
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
