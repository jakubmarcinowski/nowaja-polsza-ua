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

  @media ${mediaQueries.desktop} {
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
  z-index: 1;
  left: 0;
  right: 0;
  transform-origin: bottom;
  transform: ${props =>
    props.isActive ? 'translateY(-30rem)' : 'translateY(-13rem)'};
  transition: transform ${({ theme }) => theme.animations.default};
  width: 70%;
  margin: auto;
  min-width: 280px;
  text-align: center;
`
const Lead = styled.div`
  opacity: ${props => (props.isActive ? 1 : 0)};
  transition: opacity ${({ theme }) => theme.animations.default};
`
const Title = styled(Header)`
  margin-bottom: 2rem;
  font-size: 1.8rem;
  text-align: center;

  @media ${mediaQueries.desktop} {
    display: none;
  }
`

class HighlightedArticle extends Component {
  state = {
    isActive: false,
    isMobileView: false,
  }

  handleMouseEnter = () =>
    this.state.isMobileView || this.setState({ isActive: true })
  handleMouseLeave = () =>
    this.state.isMobileView || this.setState({ isActive: false })

  componentDidMount() {
    if (window.innerWidth < breakpoints.desktop) {
      this.setState({ isMobileView: true })
      window.innerWidth >= breakpoints.phoneLandscape &&
        this.setState({ isActive: true })
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
        <Title weight={'Bold'}>выбор редактора</Title>
        <HighlightedArticleStyled
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}
        >
          <ImgBox>
            <ImgWrapper img={heroImage} aspectRatio={1.44} />
            <PhotoLabel color="dark">выбор редакции</PhotoLabel>
          </ImgBox>
          <ArticleContent isActive={isActive}>
            <Header
              size="Large"
              color="white"
              type={2}
              margin="0 0 1.8rem"
              weight="Bold"
              lineHeight="Large"
            >
              <Link to={`/blog/${slug}`}>{title}</Link>
            </Header>
            <ArticleInfoBox
              author={authors[0]}
              publishDate={publishDate}
              justify="center"
              color="white"
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
