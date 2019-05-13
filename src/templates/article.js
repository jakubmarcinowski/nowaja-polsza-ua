import React from 'react'
import { graphql } from 'gatsby'
import { intersectionBy, get } from 'lodash/fp'

import Layout from '../components/Layout'
import ArticlePage from '../views/article/index'
import SEO from '../components/SEO'

const ArticleTemplate = props => {
  const post = get('data.contentfulBlogPost', props)
  const siteTitle = get('data.site.siteMetadata.title', props)
  const posts = get('data.allContentfulBlogPost.edges', props)
  const imageSrc = post.heroImage ? `https://${post.heroImage.fluid.src.substring(2)}` : ''

  const recommendedArticles = posts.filter(({ node: { categories } }) => {
    const postIntersection = intersectionBy(
      'contentful_id',
      categories,
      post.categories
    )
    return !!postIntersection.length
  })
  return (
    <Layout>
      {post && (
        <>
          <SEO
            siteTitle={`${post.title} | ${siteTitle}`}
            description={post.lead}
            type="article"
            image={imageSrc}
          />
          <ArticlePage article={post} posts={recommendedArticles} />
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

    allContentfulBlogPost(
      filter: { contentful_id: { ne: $contentful_id } }
      sort: { fields: [publishDate], order: DESC }
    ) {
      edges {
        node {
          title
          lead
          body {
            childMarkdownRemark {
              html
            }
          }
          slug
          publishDate(formatString: "DD MMMM YYYY", locale: "ru-RU")
          authors {
            id
            name
            slug
          }
          contentful_id
          categories {
            contentful_id
            title
            color
            slug
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
      lead
      authorsWithoutAccount
      authors {
        id
        name
        slug
      }
      categories {
        contentful_id
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
      gallery {
        id
        fluid(maxWidth: 1920, background: "rgb:000000") {
          ...GatsbyContentfulFluid
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
      recommendedArticles {
        title
          lead
          body {
            childMarkdownRemark {
              html
            }
          }
          slug
          publishDate(formatString: "DD MMMM YYYY", locale: "ru-RU")
          authors {
            id
            name
            slug
          }
          contentful_id
          categories {
            contentful_id
            title
            color
            slug
          }
          heroImage {
            fluid(maxWidth: 800, background: "rgb:000000") {
              ...GatsbyContentfulFluid
            }
          }
      }
    }
  }
`
