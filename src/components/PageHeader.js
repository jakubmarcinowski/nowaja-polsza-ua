import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import TopBar from 'components/TopBar'
import { theme } from 'utils/theme'
import Categories from 'components/Categories'
import { mediaQueries } from 'utils/mediaQueries'
import Wrapper from 'components/Wrapper'

const StyledPageHeader = styled.header`
  background: ${theme.colors.primary};
  background: ${({ currentCategory, theme }) =>
      currentCategory
        ? theme.gradients.highlighted[currentCategory.color]
        : theme.gradients.header},
    url(${({ headerPhoto }) => headerPhoto.fluid.src});
  background-position: 50% 50%;
  background-size: cover;
  padding: 1rem 0 2rem;
  text-align: center;
  z-index: 999;

  @media ${mediaQueries.phoneOnly} {
    display: none;
  }
`

const PageHeaderQuery = graphql`
  query PageHeaderQuery {
    allContentfulHomepageStaticContent {
      edges {
        node {
          headerPhoto {
            fluid(quality: 30, maxWidth: 1440, background: "rgb:000000") {
              ...GatsbyContentfulFluid_withWebp_noBase64
            }
          }
        }
      }
    }
  }
`

const PageHeader = ({ currentCategory }) => (
  <StaticQuery
    query={PageHeaderQuery}
    render={({ allContentfulHomepageStaticContent }) => (
      <>
        {allContentfulHomepageStaticContent &&
          allContentfulHomepageStaticContent.edges &&
          allContentfulHomepageStaticContent.edges[0].node &&
          allContentfulHomepageStaticContent.edges[0].node.headerPhoto && (
            <StyledPageHeader
              currentCategory={currentCategory}
              headerPhoto={
                allContentfulHomepageStaticContent.edges[0].node.headerPhoto
              }
            >
              <Wrapper>
                <TopBar />
                <Categories currentCategory={currentCategory} />
              </Wrapper>
            </StyledPageHeader>
          )}
      </>
    )}
  />
)

PageHeader.propTypes = {
  currentCategory: PropTypes.any,
}

export default PageHeader
