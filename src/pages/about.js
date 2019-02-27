import React from 'react'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'

import Layout from '../components/Layout'
import StaticContent from '../components/StaticContent'

const About = ({ data }) => {
  const {
    title,
    content,
  } = data.allContentfulPrivacyPolicyStaticContent.edges[0].node

  return (
    <Layout>
      <Helmet title={title} />
      <StaticContent content={content} />
    </Layout>
  )
}

About.propTypes = {
  data: PropTypes.any,
}

export default About

export const aboutQuery = graphql`
  query AboutQuery {
    allContentfulPrivacyPolicyStaticContent {
      edges {
        node {
          id
          title
          content {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  }
`
