import React, { Component } from 'react'
import styled from 'styled-components'

import ImgWrapper from '../../../components/ImgWrapper'
import { articleType } from '../../../types/article'
import { Link } from 'gatsby'
import { mediaQueries } from '../../../utils/mediaQueries'
import Header from '../../../components/Header'
import Paragraph from '../../../components/Paragraph'

const HighlightedArticleStyled = styled.div`
  position: relative;

  @media ${mediaQueries.large} {
    width: calc(100% * 7 / 12);
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: ${({ theme }) => theme.gradients.default};
  }
`
const ArticleContent = styled.div`
  position: absolute;
  z-index: 1;
  left: 0;
  right: 0;
  transform-origin: bottom;
  transform: ${props =>
    props.isActive ? 'translateY(-30rem)' : 'translateY(-10rem)'};
  transition: transform ${({ theme }) => theme.animations.default};
  text-align: center;
`

class HighlightedArticle extends Component {
  state = {
    isActive: false,
  }

  handleMouseEnter = () => this.setState({ isActive: true })
  handleMouseLeave = () => this.setState({ isActive: false })

  render() {
    const { title, slug, heroImage, author, description } = this.props.post
    const { isActive } = this.state

    return (
      <HighlightedArticleStyled
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        <ImgWrapper img={heroImage} />
        <ArticleContent isActive={isActive}>
          <Header
            size="Big"
            color="white"
            type={2}
            margin="0 0 1.8rem"
            weight="Bold"
          >
            <Link to={`/blog/${slug}`}>{title}</Link>
          </Header>
          <Header
            size="Medium"
            color="white"
            type={5}
            margin="0 0 1.8rem"
            weight="Bold"
          >
            <Link to={`/author/${author.slug}`}>{author.name}</Link>
          </Header>
          {isActive && description && (
            <Link to={`/blog/${slug}`}>
              <Paragraph color="white">
                {description.childMarkdownRemark.excerpt}
              </Paragraph>
            </Link>
          )}
        </ArticleContent>
      </HighlightedArticleStyled>
    )
  }
}

HighlightedArticle.propTypes = {
  post: articleType,
}

export default HighlightedArticle
