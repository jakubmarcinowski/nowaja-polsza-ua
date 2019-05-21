import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'

import Layout from '../components/Layout'

class MarkdownTemplate extends React.Component {
  render() {
    // const markdownData = get(this.props, 'data')
    const markdownData = get(this.props, 'data.markdownRemark.frontmatter')
    return (
      <Layout>
        MARKDOWN PAGE
        <a href={markdownData.pdf}>DOWNLOAD PDF FILE</a>
      </Layout>
    )
  }
}

export default MarkdownTemplate

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        article
        pdf
      }
    }
  }
`
