import React from 'react'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'

import Layout from '../components/Layout'
import EventPage from '../views/events'

const Events = ({ data }) => {
  const events = data.allContentfulEvent.edges
  const siteTitle = data.site.siteMetadata.title
  const title = 'Предстоящие события'

  return (
    <Layout>
      <Helmet title={`${title} | ${siteTitle}`} />
      <EventPage events={events} title={title} />
    </Layout>
  )
}

Events.propTypes = {
  data: PropTypes.any,
}

export default Events

export const EventsPageQuery = graphql`
  query EventQuery {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulEvent(sort: { fields: [expirationDate], order: ASC }) {
      edges {
        node {
          title
          slug
          expirationDate(formatString: "DD MMMM YYYY", locale: "ru-RU")
          displayedDate
          organizer
          link
          location
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
        }
      }
    }
  }
`
