import React from 'react'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'

import Layout from '../components/Layout'
import PublicationPage from '../views/publications'

const Publications = ({ data }) => {
  const publications = data.allContentfulPublication.edges

  return (
    <Layout>
      <Helmet title="Publications" />
      <PublicationPage publications={publications} />
    </Layout>
  )
}

Publications.propTypes = {
  data: PropTypes.any,
}

export default Publications

export const PublicationsPageQuery = graphql`
  query PublicationQuery {
    allContentfulPublication(sort: { fields: [publishDate], order: DESC }) {
      edges {
        node {
          title
          slug
          publishDate(formatString: "DD MMMM YYYY", locale: "ru-RU")
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
