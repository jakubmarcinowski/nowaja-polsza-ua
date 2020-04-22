import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import { mediaQueries } from 'utils/mediaQueries'
import SocialMediaList from 'components/SocialMediaList'
import MobileMenuItems from 'components/MobileMenuItems'
import MobileMenuCategories from 'components/MobileMenuCategories'
import { novPolSocialMediaUrls } from 'utils/socialMedia'
import Brand from 'components/Brand'

const MenuIcon = styled.div`
  position: relative;
  width: 20px;
  height: 19px;

  &::before,
  &::after,
  .middle {
    position: absolute;
    left: 0;
    width: 20px;
    height: 3px;
    transition: transform 0.3s ease-out;
    background-color: ${props => props.theme.colors.white};
  }

  &::before {
    content: '';
    top: 0;
    transform-origin: 0 0;
    ${props => props.isMenuOpen && 'transform: rotate(45deg) scaleX(1.25)'};
  }

  &::after {
    content: '';
    bottom: 0;
    transform-origin: 0 100%;
    ${props =>
      props.isMenuOpen &&
      'transform: rotate(-45deg) scaleX(1.25) translateY(1px);'}
  }
  .middle {
    top: 8px;
    transform-origin: 0 50%;
    ${props => props.isMenuOpen && 'opacity: 0; transform: scaleX(0);'}
  }
`
const MenuHeader = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 6rem;
  padding: 1rem 2rem;
  background: ${props => props.theme.colors.primary};
  background: ${({ currentCategory, theme }) =>
      currentCategory
        ? theme.gradients.highlighted[currentCategory.color]
        : theme.gradients.header},
    url(${({ headerPhoto }) => headerPhoto.fluid.src});
  background-position: 50% 50%;
  background-size: cover;
  z-index: 999;

  @media ${mediaQueries.tablet} {
    padding: 1rem 4rem;
  }

  @media ${mediaQueries.desktop} {
    display: none;
  }
`
const MenuContent = styled.div`
  position: fixed;
  display: flex;
  top: 6rem;
  left: 0;
  right: 0;
  flex-direction: column;
  justify-content: space-between;
  height: calc(100vh - 6rem);
  padding: 40px 0;
  transform: scale(1.2);
  transition: all 0.3s ease-out;
  opacity: 0;
  background: ${props => props.theme.colors.menuBackground};
  color: ${props => props.theme.colors.white};
  text-align: center;
  overflow-y: scroll;
  z-index: -10;
  ${props =>
    props.isMenuOpen && 'opacity: 1; z-index: 999; transform: scale(1);'}
`

const MenuPrintArea = styled.div`
  @media print {
    display: none;
  }
`

const Line = styled.div`
  height: 2px;
  width: 190px;
  margin: 15px auto 40px;
  background: ${props => props.theme.colors.white};
`

const MobileSocialMediaList = styled(SocialMediaList)`
  margin: 0 auto;
`

const PageHeaderQueryMobile = graphql`
  query PageHeaderQueryMobile {
    allContentfulHomepageStaticContent {
      edges {
        node {
          headerPhoto {
            fluid(maxWidth: 768, background: "rgb:000000") {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`

class MobileMenu extends Component {
  state = {
    isMenuOpen: false,
  }
  toggleMenu = () => {
    this.setState(({ isMenuOpen }) => ({ isMenuOpen: !isMenuOpen }))
  }

  render() {
    const { isMenuOpen } = this.state
    const { currentCategory } = this.props

    return (
      <StaticQuery
        query={PageHeaderQueryMobile}
        render={({ allContentfulHomepageStaticContent }) => (
          <>
            {allContentfulHomepageStaticContent &&
              allContentfulHomepageStaticContent.edges &&
              allContentfulHomepageStaticContent.edges[0].node &&
              allContentfulHomepageStaticContent.edges[0].node.headerPhoto && (
                <MenuPrintArea>
                  <MenuHeader
                    currentCategory={currentCategory}
                    headerPhoto={
                      allContentfulHomepageStaticContent.edges[0].node
                        .headerPhoto
                    }
                  >
                    <Brand />
                    <MenuIcon onClick={this.toggleMenu} isMenuOpen={isMenuOpen}>
                      <div className="middle" />
                    </MenuIcon>
                  </MenuHeader>
                  <MenuContent isMenuOpen={isMenuOpen}>
                    <nav>
                      <MobileMenuCategories currentCategory={currentCategory} />
                      <Line />
                      <MobileMenuItems />
                    </nav>
                    <MobileSocialMediaList
                      isWhite
                      urls={novPolSocialMediaUrls}
                    />
                  </MenuContent>
                </MenuPrintArea>
              )}
          </>
        )}
      />
    )
  }
}

MobileMenu.propTypes = {
  currentCategory: PropTypes.any,
}

export default MobileMenu
