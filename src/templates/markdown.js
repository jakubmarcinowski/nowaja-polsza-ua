import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'

import Layout from '../components/Layout'

class MarkdownTemplate extends React.Component {
  render() {
    // const markdownData = get(this.props, 'data')
    const markdownData = get(this.props, 'data.markdownRemark')
    console.log('markdownData:')
    console.log(markdownData)

    return <Layout>MARKDOWN PAGE</Layout>
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
      }
    }
  }
`
