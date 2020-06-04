import React from 'react'
import SEO from 'components/SEO'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'

import Layout from 'components/Layout'
import PublicationPage from 'views/publications'
import { trans } from 'utils/translate'

const mapCoverData = cover => ({
  relativePath: cover.node.relativePath,
  fluid: cover.node.childImageSharp.fluid,
})

const Publications = ({ data }) => {
  const publications = data.allContentfulPublication.edges
  const covers = data.allFile.edges.map(mapCoverData)
  const title = trans('LIBRARY')
  const description = data.site.siteMetadata.description

  return (
    <Layout>
      <SEO siteTitle={title} description={description} type="summary" />
      <PublicationPage
        publications={publications}
        title={title}
        covers={covers}
      />
    </Layout>
  )
}

Publications.propTypes = {
  data: PropTypes.any,
}

export default Publications

export const PublicationsPageQuery = graphql`
  query PublicationQuery {
    allFile(filter: { sourceInstanceName: { eq: "covers" } }) {
      edges {
        node {
          relativePath
          childImageSharp {
            fluid(quality: 30, maxWidth: 680) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
    site {
      siteMetadata {
        title
        description
      }
    }
    allContentfulPublication(
      filter: { slug: { ne: "xxx" } }
      sort: { fields: [publishDate], order: DESC }
    ) {
      edges {
        node {
          title
          slug
          typeOfPublications
          publishDate(formatString: "DD MMMM YYYY", locale: "ru-RU")
          subtitle
          authors {
            id
            name
            slug
          }
          heroImage {
            fluid(quality: 30, maxWidth: 680, resizingBehavior: SCALE) {
              ...GatsbyContentfulFluid_withWebp
            }
          }
          lead {
            childMarkdownRemark {
              html
            }
          }
          pdf {
            file {
              url
            }
          }
          mobi {
            file {
              url
            }
          }
          epub {
            file {
              url
            }
          }
        }
      }
    }
  }
`
