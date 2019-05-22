import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'

import ArchivedArticlePage from '../views/archiveArticle/index'
import Layout from '../components/Layout'

class MarkdownTemplate extends React.Component {
  render() {
    // const markdownData = get(this.props, 'data')
    const article = get(this.props, 'data.markdownRemark.frontmatter')
    console.log(article)
    return (
      <Layout>
        MARKDOWN PAGE
        <a href={article.pdf}>DOWNLOAD PDF FILE</a>
        <ArchivedArticlePage article={article} />
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
        date
        pdf
      }
    }
  }
`
