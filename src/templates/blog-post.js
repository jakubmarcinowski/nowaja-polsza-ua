import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import styled from 'styled-components'

import ImgWrapper from '../components/ImgWrapper'
import Layout from '../components/Layout'
import Wrapper from '../components/Wrapper'

const StyledHeroImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 12.5em;
  background: #e1e1e1;
  margin: -1em -2.5em 1em;
  font-size: 2em;
`

class BlogPostTemplate extends React.Component {
  render() {
    const post = get(this.props, 'data.contentfulBlogPost')
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')

    return (
      <Layout>
        <div>
          <Helmet title={`${post.title} | ${siteTitle}`} />
          <StyledHeroImage>
            <ImgWrapper img={post.heroImage} />
          </StyledHeroImage>
          <Wrapper>
            <h1 className="section-headline">{post.title}</h1>
            <p
              style={{
                display: 'block',
              }}
            >
              {post.publishDate}
            </p>
            <div
              dangerouslySetInnerHTML={{
                __html: post.body.childMarkdownRemark.html,
              }}
            />
          </Wrapper>
        </div>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishDate(formatString: "MMMM Do, YYYY")
      heroImage {
        fluid(maxWidth: 1180, background: "rgb:000000") {
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
