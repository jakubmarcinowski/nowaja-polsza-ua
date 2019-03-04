import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

import ImgWrapper from '../../../components/ImgWrapper'
import Header from '../../../components/Header'
import Label from '../../../components/Label'
import { mediaQueries } from '../../../utils/mediaQueries'

const StyledPageHeader = styled.header`
  @media ${mediaQueries.desktop} {
    position: relative;
    margin-bottom: 7rem;
    text-align: center;
  }
`
const ImgBox = styled.div`
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: ${({ theme }) => theme.gradients.article};
  }
`
const Banner = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-top: 2rem;

  @media ${mediaQueries.desktop} {
    position: absolute;
    bottom: -7rem;
    left: 50%;
    transform: translateX(-50%);
    width: 870px;
    padding: 3rem;
    border: 1px solid ${({ theme }) => theme.colors.dark};
    background: ${({ theme }) => theme.colors.white};
  }

  @media ${mediaQueries.large} {
    width: ${({ theme }) =>
      `calc(${theme.grid.width.small} - ${theme.grid.paddings.large} *2)`};
  }
`
const HeaderWrapper = styled.div`
  @media ${mediaQueries.desktop} {
    order: 1;
    max-width: 800px;
    margin: auto;
  }
`
const StyledHeader = styled(Header)`
  margin-bottom: 1em;
  line-height: 1.2;

  @media ${mediaQueries.tablet} {
    margin-bottom: 3rem;
    line-height: 1.4;
  }

  @media ${mediaQueries.desktop} {
    line-height: 1.8;
    font-size: 3.6rem;
  }
`

const InfoBox = styled.div`
  display: flex;
  align-items: baseline;
  flex-wrap: wrap;
  margin-bottom: 1rem;
  font-size: 1.4rem;

  @media ${mediaQueries.desktop} {
    order: 2;
    justify-content: center;
    margin-bottom: 3rem;
    font-size: 1.6rem;
  }
`
const InfoItem = styled.div`
  font-size: 1.4rem;

  @media ${mediaQueries.desktop} {
    font-size: 1.6rem;
  }
`
const Date = styled.span`
  display: inline-block;
  margin: 0 2.4rem 0.5rem 0;
  font-weight: 300;
`
const AuthorLink = styled(Link)`
  display: inline-block;
  transition: opacity ${props => props.theme.animations.default};
  margin-bottom: 0.5rem;
  text-decoration: underline;

  &:not(:last-child) {
    margin-bottom: 0;
  }

  &:hover {
    opacity: 0.9;
  }
`
const CategoriesBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 1rem;

  @media ${mediaQueries.desktop} {
    order: 3;
    justify-content: center;
  }
`
const TextLabel = styled.label`
  display: none;

  @media ${mediaQueries.desktop} {
    display: inline-block;
    order: 3;
  }
`
const LabelLink = styled(Link)`
  &:not(:last-child) {
    margin: 0 1.5rem 1.5rem 0;

    @media ${mediaQueries.desktop} {
      margin: 0 2.5rem 0 0;
    }
  }
`

const PageHeader = ({ title, publishDate, heroImage, authors, categories }) => (
  <StyledPageHeader>
    <ImgBox>
      <ImgWrapper img={heroImage} aspectRatio={2.5} />
    </ImgBox>
    <Banner>
      <InfoBox>
        <InfoItem>
          <Date>{publishDate}</Date>
        </InfoItem>
        <InfoItem>
          <TextLabel>{authors.length > 1 ? 'Авторы' : 'Автор'}</TextLabel>{' '}
          {authors &&
            authors.map(({ slug, name }, i, authors) => (
              <>
                <AuthorLink key={slug} to={`/author/${slug}`}>
                  {name}
                </AuthorLink>
                {!!authors[i + 1] && <>,&nbsp;</>}
              </>
            ))}
        </InfoItem>
      </InfoBox>
      <HeaderWrapper>
        <StyledHeader
          lineHeight="Biggest"
          size="Biggest"
          color="dark"
          weight="Bold"
          margin="0 0 2rem"
        >
          {title}
        </StyledHeader>
      </HeaderWrapper>
      <CategoriesBox>
        {categories &&
          categories.map(category => (
            <LabelLink to={`/category/${category.slug}`} key={category.slug}>
              <Label color={category.color}>{category.title}</Label>
            </LabelLink>
          ))}
      </CategoriesBox>
    </Banner>
  </StyledPageHeader>
)

PageHeader.defaultProps = {
  title: '',
  publishDate: '',
}

PageHeader.propTypes = {
  title: PropTypes.string,
  publishDate: PropTypes.string,
  heroImage: PropTypes.shape({
    fluid: PropTypes.shape({
      aspectRatio: PropTypes.number,
      base64: PropTypes.string,
      sizes: PropTypes.string,
      src: PropTypes.string,
      srcSet: PropTypes.string,
    }),
  }),
  categories: PropTypes.arrayOf(
    PropTypes.shape({ title: PropTypes.string, slug: PropTypes.string })
  ),
  authors: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      slug: PropTypes.string,
    })
  ),
}

export default PageHeader