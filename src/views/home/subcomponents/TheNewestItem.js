import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import { articleType } from 'src/types/article'
import ImgWrapper from '../../../components/ImgWrapper'
import Paragraph from '../../../components/Paragraph'
import Header from '../../../components/Header'
import { mediaQueries } from '../../../utils/mediaQueries'

const Wrapper = styled.div`
  display: flex;
`

const ImgBox = styled.div`
  position: relative;
  flex: 0 0 calc(100% * 1 / 3);
  margin-right: 2.5rem;
`
const CategoryLink = styled(Link)`
  position: absolute;
  top: 7px;
  left: -3px;
  display: block;
  padding: 0.5rem;
  transition: opacity ${props => props.theme.animations.default};
  background: ${props => props.theme.colors.highlighted.rouge};
  color: ${props => props.theme.colors.white};

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
  margin: 0 0 1rem;
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
const ParagraphWrapper = styled.div`
  @media ${mediaQueries.large} {
    max-height: 6rem;
    overflow: hidden;
  }
`

const TheNewestItem = ({
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
  <Wrapper>
    <ImgBox>
      <Link to={`/blog/${slug}`}>
        <ImgWrapper img={heroImage} aspectRatio={1} />
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
    <div>
      {slug && (
        <Header
          weight="Bold"
          type={2}
          size="Medium"
          color="black"
          margin="0 0 1rem"
        >
          <Link to={`/blog/${slug}`}>{title}</Link>
        </Header>
      )}
      <InfoBox>
        {publishDate && <Date>{publishDate}</Date>}
        {author && (
          <AuthorLink to={`/author/${author.slug}`}>{author.name}</AuthorLink>
        )}
      </InfoBox>
      {description && (
        <ParagraphWrapper>
          <Link to={`/blog/${slug}`}>
            <Paragraph size={'Big'}>
              <span
                dangerouslySetInnerHTML={{
                  __html: description.childMarkdownRemark.excerpt,
                }}
              />
            </Paragraph>
          </Link>
        </ParagraphWrapper>
      )}
    </div>
  </Wrapper>
)

TheNewestItem.propTypes = {
  article: articleType,
}

export default TheNewestItem
