import React, { useState, useCallback, useEffect } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import TopBar from 'components/TopBar'
import { theme } from 'utils/theme'
import Categories from 'components/Categories'
import { mediaQueries } from 'utils/mediaQueries'
import Wrapper from 'components/Wrapper'

const pageHeaderHeightWithoutCategories =
  parseInt(theme.grid.pageHeaderHeight, 10) -
  parseInt(theme.grid.categoriesDesktopHeight, 10)

const StyledPageHeader = styled.header`
  top: 0;
  width: 100%;
  background: ${theme.colors.primary};
  background: ${({ currentCategory, theme }) =>
    currentCategory
      ? theme.gradients.highlighted[currentCategory.color]
      : theme.gradients.header},
    url(${({ headerPhoto }) => headerPhoto.fluid.src});
  background-position: 50% 50%;
  background-size: cover;
  padding-top: 1rem;
  text-align: center;
  z-index: 999;
  height: ${theme.grid.pageHeaderHeight};

  ${props =>
    props.fixed &&
    `
  position: fixed;
  top: -${pageHeaderHeightWithoutCategories}px;
  `}

  @media ${mediaQueries.phoneOnly} {
    display: none;
  }
`

const StyledPlaceholder = styled.div`
  content: '';
  height: ${theme.grid.pageHeaderHeight};
`

const CategoriesWrapper = styled.div`
  display: flex;
  height: ${theme.grid.categoriesDesktopHeight};
  align-items: center;
  justify-content: center;
`

const PageHeaderQuery = graphql`
  query PageHeaderQuery {
    allContentfulHomepageStaticContent {
      edges {
        node {
          headerPhoto {
            fluid(maxWidth: 1440, background: "rgb:000000") {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`

const PageHeader = ({ currentCategory }) => {
  const [fixed, setFixed] = useState(false)
  const onScroll = useCallback(() => {
    setFixed(window.scrollY > pageHeaderHeightWithoutCategories)
  })
  useEffect(() => {
    document.addEventListener('scroll', onScroll)
    return () => document.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <StaticQuery
      query={PageHeaderQuery}
      render={({ allContentfulHomepageStaticContent }) => (
        <>
          {allContentfulHomepageStaticContent &&
            allContentfulHomepageStaticContent.edges &&
            allContentfulHomepageStaticContent.edges[0].node &&
            allContentfulHomepageStaticContent.edges[0].node.headerPhoto && (
              <>
                {fixed && <StyledPlaceholder />}
                <StyledPageHeader
                  currentCategory={currentCategory}
                  headerPhoto={
                    allContentfulHomepageStaticContent.edges[0].node.headerPhoto
                  }
                  fixed={fixed}
                >
                  <Wrapper>
                    <TopBar />
                    <CategoriesWrapper>
                      <Categories currentCategory={currentCategory} />
                    </CategoriesWrapper>
                  </Wrapper>
                </StyledPageHeader>
              </>
            )}
        </>
      )}
    />
  )
}

PageHeader.propTypes = {
  currentCategory: PropTypes.any,
}

export default PageHeader
