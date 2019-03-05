import React from 'react'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'

import Layout from '../components/Layout'
import EventPage from '../views/events'

const Events = ({ data }) => {
  const events = data.allContentfulEvent.edges

  return (
    <Layout>
      <Helmet title="Events" />
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
    allContentfulEvent(sort: { fields: [expirationDate], order: DESC }) {
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
