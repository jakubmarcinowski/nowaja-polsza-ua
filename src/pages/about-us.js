import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import SEO from 'components/SEO'

import Layout from 'components/Layout'
import StaticContent from 'components/StaticContent'
import Wrapper from 'components/Wrapper'

const AboutUsStyled = styled.div`
  margin-bottom: 8rem;

  h1:first-child {
    text-align: center;
  }
`

const AboutUs = ({ data }) => {
  const {
    title,
    content,
    description,
  } = data.allContentfulAboutUsStaticContent.edges[0].node

  return (
    <Layout>
      <SEO siteTitle={title} description={description} type="summary" />
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
