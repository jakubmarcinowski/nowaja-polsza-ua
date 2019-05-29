import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import SEO from '../components/SEO'

import Layout from '../components/Layout'
import StaticContent from '../components/StaticContent'
import Wrapper from '../components/Wrapper'
import { isSiteBlocked } from '../utils/blockSiteBeforeLive'

const AboutUsStyled = styled.div`
  margin-bottom: 8rem;
`

const AboutUs = ({ data }) => {
  const {
    title,
    content,
    description,
  } = data.allContentfulAboutUsStaticContent.edges[0].node

  if (isSiteBlocked()) return null

  return (
    <Layout>
      <SEO siteTitle={title} description={description} type="website" />
      {content && (
        <Wrapper>
          <StaticContent>
            <AboutUsStyled
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

AboutUs.propTypes = {
  data: PropTypes.any,
}

export default AboutUs

export const AboutUsPageQuery = graphql`
  query AboutUsQuery {
    site {
      siteMetadata {
        title
        description
      }
    }

    allContentfulAboutUsStaticContent {
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
