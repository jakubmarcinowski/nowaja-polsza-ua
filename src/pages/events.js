import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'

import Layout from '../components/Layout'
import EventPage from '../views/events'
import SEO from '../components/SEO'

const Events = ({ data }) => {
  const events = data.allContentfulEvent.edges
  const siteTitle = data.site.siteMetadata.title
  const title = 'Ближайшие мероприятия'
  const description = data.siteMetadata.description

  return (
    <Layout>
      <SEO
        siteTitle={`${title} | ${siteTitle}`}
        description={description}
        type="events"
      />
      <EventPage events={events} />
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
        description
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
          address
          city
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
