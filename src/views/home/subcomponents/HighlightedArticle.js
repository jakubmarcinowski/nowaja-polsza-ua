import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import ImgWrapper from '../../../components/ImgWrapper'
import { articleType } from '../../../types/article'
import { breakpoints, mediaQueries } from '../../../utils/mediaQueries'
import Header from '../../../components/Header'
import Paragraph from '../../../components/Paragraph'
import * as PropTypes from 'prop-types'
import ArticleInfoBox from '../../../components/ArticleInfoBox'
import PhotoLabel from '../../../components/PhotoLabel'

const HighlightedArticleStyled = styled.div`
  position: relative;
  margin: 0 0 2.5rem;
  grid-column: span 2;
  grid-row: span 2;
  
  @media ${mediaQueries.large} {
    flex: 0 0 57%;
    margin: 0;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: ${({ theme }) => theme.gradients.hero};
  }
`
const ImgBox = styled.div`
  position: relative;
  height: 100%;
`
const ArticleContent = styled.div`
  position: absolute;
  z-index: 2;
  left: 0;
  right: 0;
  transform-origin: bottom;
  transform: translateY(-13rem);
  transition: transform ${({ theme }) => theme.animations.default};
  margin: 0 auto;
  min-width: 264px;
  width: 90%;
  text-align: center;

  @media ${mediaQueries.phoneLandscape} {
    transform: translateY(-22rem);
    width: 80%;
    min-width: 280px;
  }

  @media ${mediaQueries.desktop} {
  bottom: 0;
    transform: ${({ isActive }) =>
      isActive ? 'translateY(-10rem)' : 'translateY(0)'};
  }

  @media ${mediaQueries.large} {
    transform: ${({ isActive }) =>
      isActive ? 'translateY(-10rem)' : 'translateY(0)'};
  }
`
const StyledHeader = styled(Header)`
  font-size: 1.4rem;
  line-height: 1.5em;

  @media ${mediaQueries.tablet} {
    font-size: 2rem;
  }

  @media ${mediaQueries.desktop} {
    font-size: 2.6rem;
  }
`

const StyledImgWrapper = styled(ImgWrapper)`
  height: 100%;
`

const Lead = styled.div`
margin-top: 1rem;
  opacity: ${props => (props.isActive ? 1 : 0)};
  transition: opacity ${({ theme }) => theme.animations.default};
`

const LinkOverlay = styled(Link)`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 2;
`

class HighlightedArticle extends Component {
  state = {
    isActive: false,
    isMobileView: false,
    isSmallMobile: false,
  }

  handleMouseEnter = () =>
    this.state.isMobileView || this.setState({ isActive: true })
  handleMouseLeave = () =>
    this.state.isMobileView || this.setState({ isActive: false })

  componentDidMount() {
    if (window.innerWidth < breakpoints.desktop) {
      this.setState({ isMobileView: true })
      if (window.innerWidth >= breakpoints.phoneLandscape) {
        this.setState({ isActive: true })
      } else {
        this.setState({ isSmallMobile: true })
      }
    }
  }

  render() {
    const {
      title,
      slug,
      heroImage,
      authors,
      authorsWithoutAccount,
      summary,
      publishDate,
      categories,
    } = this.props.post
    const { isActive } = this.state

    return (
      <>
        <HighlightedArticleStyled
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}
        >
          <LinkOverlay to={`/article/${slug}`} />
          <ImgBox>
            <StyledImgWrapper img={heroImage} aspectRatio={1.44} />
            <PhotoLabel color={categories[0].color}>
              {categories[0].title}
            </PhotoLabel>
          </ImgBox>
          <ArticleContent isActive={isActive}>
            <StyledHeader
              color="white"
              type={2}
              margin="0 0 1.8rem"
              weight="Bold"
              lineHeight={this.state.isSmallMobile ? 'Small' : 'Bigger'}
            >
              <Link to={`/article/${slug}`}>{title}</Link>
            </StyledHeader>
            <ArticleInfoBox
              authors={authors}
              authorsWithoutAccount={authorsWithoutAccount}
              publishDate={!this.state.isMobileView && publishDate}
              justify="center"
              color="white"
              dateLink={`/article/${slug}`}
            />
            {summary && (
              <Lead isActive={isActive}>
                <Link to={`/article/${slug}`}>
                  <Paragraph color="white" lineHeight="Medium">
                    {summary}
                  </Paragraph>
                </Link>
              </Lead>
            )}
          </ArticleContent>
        </HighlightedArticleStyled>
      </>
    )
  }
}

HighlightedArticle.propTypes = {
  post: articleType,
  isMobileView: PropTypes.bool,
  publishDate: PropTypes.string,
}

export default HighlightedArticle
