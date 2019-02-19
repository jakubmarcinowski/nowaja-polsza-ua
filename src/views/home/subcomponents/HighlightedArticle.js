import React, { Component } from 'react'
import styled from 'styled-components'

import ImgWrapper from '../../../components/ImgWrapper'
import { articleType } from '../../../types/article'
import { Link } from 'gatsby'
import { mediaQueries } from '../../../utils/mediaQueries'
import Header from '../../../components/Header'

const HighlightedArticleStyled = styled.div`
  position: relative;
  margin: 0 0 2.5rem;

  @media ${mediaQueries.large} {
    flex: 0 0 calc(100% * 7 / 12);
    margin: 0 2.5rem 0 0;
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

const Lead = styled.p`
  font-size: 1.6rem;
  color: ${({ theme }) => theme.colors.white};
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
        <ImgWrapper img={heroImage} aspectRatio={2.05} />
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
              <Lead
                dangerouslySetInnerHTML={{
                  __html: description.childMarkdownRemark.excerpt,
                }}
              />
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
