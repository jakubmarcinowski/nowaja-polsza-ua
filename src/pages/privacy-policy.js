import React from 'react'
import SEO from '../components/SEO'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Layout from '../components/Layout'
import StaticContent from '../components/StaticContent'
import Wrapper from '../components/Wrapper'

const PrivacyPolicyStyled = styled.div`
  margin-bottom: 8rem;
`

const PrivacyPolicy = ({ data }) => {
  const {
    title,
    content,
    description,
  } = data.allContentfulPrivacyPolicyStaticContent.edges[0].node

  const { title: siteTitle } = data.site.siteMetadata

  return (
    <Layout>
      <SEO
        siteTitle={`${title} | ${siteTitle}`}
        description={description}
        type="page"
      />
      {content && (
        <Wrapper>
          <StaticContent>
            <PrivacyPolicyStyled
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

PrivacyPolicy.propTypes = {
  data: PropTypes.any,
}

export default PrivacyPolicy

export const PrivacyPolicyPageQuery = graphql`
  query PrivacyPolicyQuery {
    site {
      siteMetadata {
        title
        description
      }
    }

    allContentfulPrivacyPolicyStaticContent {
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
