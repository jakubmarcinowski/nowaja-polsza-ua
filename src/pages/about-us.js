import React from 'react'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Layout from '../components/Layout'
import StaticContent from '../components/StaticContent'
import Wrapper from '../components/Wrapper'

const AboutUsStyled = styled.div`
  margin-bottom: 8rem;
`

const AboutUs = ({ data }) => {
  const {
    title,
    content,
  } = data.allContentfulAboutUsStaticContent.edges[0].node

  const { title: siteTitle } = data.site.siteMetadata

  return (
    <Layout>
      <Helmet title={`${title} | ${siteTitle}`} />
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
