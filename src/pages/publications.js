import React from 'react'
import SEO from '../components/SEO'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'

import Layout from '../components/Layout'
import PublicationPage from '../views/publications'

const Publications = ({ data }) => {
  const publications = data.allContentfulPublication.edges
  const siteTitle = data.site.siteMetadata.title
  const title = 'Библиотека'
  const description = data.site.siteMetadata.description

  return (
    <Layout>
      <SEO
        siteTitle={`${title} | ${siteTitle}`}
        description={description}
        type="website"
      />
      <PublicationPage publications={publications} title={title} />
    </Layout>
  )
}

Publications.propTypes = {
  data: PropTypes.any,
}

export default Publications

export const PublicationsPageQuery = graphql`
  query PublicationQuery {
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
            fluid(maxWidth: 768, resizingBehavior: SCALE) {
              ...GatsbyContentfulFluid
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
