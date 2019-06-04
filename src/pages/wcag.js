import React from 'react'
import SEO from '../components/SEO'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Layout from '../components/Layout'
import StaticContent from '../components/StaticContent'
import Wrapper from '../components/Wrapper'

const WCAGStyled = styled.div`
  margin-bottom: 8rem;
`

const WCAG = ({ data }) => {
  const { title, content } = data.allContentfulWcagStaticContent.edges[0].node
  const { description: description } = data.site.siteMetadata
  return (
    <Layout>
      <SEO siteTitle={title} description={description} type="summary" />
      {content && (
        <Wrapper>
          <StaticContent>
            <WCAGStyled
              dangerouslySetInnerHTML={{
                __html: content.childMarkdownRemark.html,
              }}
            />
          </StaticContent>
        </Wrapper>
      )}
    </Layout>
  )
}

WCAG.propTypes = {
  data: PropTypes.any,
}

export default WCAG

export const WCAGPageQuery = graphql`
  query WCAGQuery {
    site {
      siteMetadata {
        title
        description
      }
    }

    allContentfulWcagStaticContent {
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
