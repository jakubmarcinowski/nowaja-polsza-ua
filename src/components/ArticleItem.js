import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import { articleType } from '../types/article'
import ImgWrapper from './ImgWrapper'
import Paragraph from './Paragraph'

const ImgBox = styled.div`
  position: relative;
  margin-bottom: 3.6rem;
`
const CategoryLink = styled(Link)`
  position: absolute;
  top: 7px;
  left: -3px;
  display: block;
  transition: opacity ${props => props.theme.animations.default};
  background: ${({ theme, color }) => theme.colors.highlighted[color]};
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
  transition: opacity ${props => props.theme.animations.default};
  margin-bottom: 0.5rem;
  color: ${props => props.theme.colors.plum};
  font-weight: bold;

  &:hover {
    opacity: 0.9;
  }
`
const Title = styled.h3`
  transition: opacity ${props => props.theme.animations.default};
  margin: 1rem 0 2rem;
  font-size: 2.6rem;

  &:hover {
    opacity: 0.9;
  }
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
        <ImgWrapper img={heroImage} aspectRatio={1.76} />
      </Link>
      {categories && (
        <CategoryLink
          color={categories[0].color}
          to={`/category/${categories[0].slug}`}
        >
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
        {description && (
          <Link to={`/blog/${slug}`}>
            <Paragraph size={'Big'}>
              <span
                dangerouslySetInnerHTML={{
                  __html: description.childMarkdownRemark.excerpt,
                }}
              />
            </Paragraph>
          </Link>
        )}
      </>
    )}
  </>
)

ArticleItem.propTypes = {
  article: articleType,
}

export default ArticleItem
