import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import { articleType } from '../types/article'
import ImgWrapper from './ImgWrapper'

const ImgBox = styled.div`
  position: relative;
  margin-bottom: 3.6rem;
`
const CategoryLink = styled(Link)`
  position: absolute;
  top: 7px;
  left: -3px;
  display: block;
  transition: opacity ${props => props.theme.animations.duration} ease;
  background: ${props => props.theme.colors.rouge};
  color: ${props => props.theme.colors.white};
  padding: 0.5rem;

  &:hover {
    opacity: 0.9;
  }
`
const Date = styled.div`
  margin: 0 2.4rem 0.5rem 0;
  color: ${props => props.theme.colors.darkGreyBlue};
`
const InfoBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`
const AuthorLink = styled(Link)`
  display: block;
  transition: opacity ${props => props.theme.animations.duration} ease;
  margin-bottom: 0.5rem;
  color: ${props => props.theme.colors.plum};
  font-weight: bold;

  &:hover {
    opacity: 0.9;
  }
`
const Title = styled.h3`
  transition: opacity ${props => props.theme.animations.duration} ease;
  margin: 1rem 0 2rem;
  font-size: 2.6rem;

  &:hover {
    opacity: 0.9;
  }
`

const Lead = styled.p`
  font-size: 1.6rem;
`

const ArticleItem = ({
  article: {
    title,
    slug,
    author,
    categories,
    heroImage,
    publishDate,
    description,
  },
}) => (
  <>
    <ImgBox>
      <Link to={`/blog/${slug}`}>
        <ImgWrapper img={heroImage} />
      </Link>
      {categories && (
        <CategoryLink to={`/category/${categories[0].slug}`}>
          {categories[0].title}
        </CategoryLink>
      )}
    </ImgBox>
    <InfoBox>
      {publishDate && <Date>{publishDate}</Date>}
      {author && (
        <AuthorLink to={`/author/${author.slug}`}>{author.name}</AuthorLink>
      )}
    </InfoBox>
    {slug && (
      <>
        <Title>
          <Link to={`/blog/${slug}`}>{title}</Link>
        </Title>
        <Link to={`/blog/${slug}`}>
          <Lead
            dangerouslySetInnerHTML={{
              __html: description.childMarkdownRemark.excerpt,
            }}
          />
        </Link>
      </>
    )}
  </>
)

ArticleItem.propTypes = {
  article: articleType,
}

export default ArticleItem
