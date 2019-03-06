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

  @media ${mediaQueries.large} {
    flex: 0 0 57%;
    margin: 0 2.5rem 0 0;
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
`
const ArticleContent = styled.div`
  position: absolute;
  z-index: 2;
  left: 0;
  right: 0;
  transform-origin: bottom;
  transform: ${props =>
    props.isActive ? 'translateY(-25rem)' : 'translateY(-16rem)'};
  transition: transform ${({ theme }) => theme.animations.default};
  width: 80%;
  margin: 0 auto;
  min-width: 280px;
  text-align: center;

  @media ${mediaQueries.tablet} {
  transform: ${props =>
  props.isActive ? 'translateY(-30rem)' : 'translateY(-23rem)'};
  }
`

const Lead = styled.div`
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
      lead,
      publishDate,
    } = this.props.post
    const { isActive } = this.state

    return (
      <>
        <HighlightedArticleStyled
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}
        >
          <LinkOverlay to={`/blog/${slug}`} />
          <ImgBox>
            <ImgWrapper img={heroImage} aspectRatio={1.44} />
            <PhotoLabel color="dark">Выбор редакции</PhotoLabel>
          </ImgBox>
          <ArticleContent isActive={isActive}>
            <Header
              size="Bigger"
              color="white"
              type={2}
              margin="0 0 1.8rem"
              weight="Bold"
              lineHeight={this.state.isSmallMobile ? 'Small' : 'Bigger'}
            >
              <Link to={`/blog/${slug}`}>{title}</Link>
            </Header>
            <ArticleInfoBox
              authors={authors}
              publishDate={!this.state.isMobileView && publishDate}
              justify="center"
              color="white"
              dateLink={`/blog/${slug}`}
            />
            {lead && (
              <Lead isActive={isActive}>
                <Link to={`/blog/${slug}`}>
                  <Paragraph color="white" lineHeight="Medium">
                    {lead}
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
