import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

import ImgWrapper from 'components/ImgWrapper'
import Header from 'components/Header'
import Label from 'components/Label'
import { mediaQueries } from 'utils/mediaQueries'

const StyledPageHeader = styled.header`
  text-align: center;

  @media ${mediaQueries.desktop} {
    position: relative;
  }
`
const ImgBox = styled.div`
  position: relative;
`

const Banner = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
  padding-top: 2rem;

  @media ${mediaQueries.desktop} {
    bottom: -31rem;
    width: 870px;
    padding: 2rem;
    background: ${({ theme }) => theme.colors.white};
  }

  @media ${mediaQueries.large} {
    width: ${({ theme }) =>
      `calc(${theme.grid.width.small} - ${theme.grid.paddings.large} *2)`};
  }
`
const HeaderWrapper = styled.div`
  margin: auto;

  @media ${mediaQueries.desktop} {
    order: 1;
  }
`
const StyledHeader = styled(Header)`
  margin: 2rem 0 4rem;
  line-height: 1.2;
  font-size: 3rem;

  @media ${mediaQueries.tablet} {
    margin: 5rem 0 4rem;
    font-size: 4rem;
  }

  @media ${mediaQueries.desktop} {
    margin: 8rem 0 5rem;
    font-size: 5.6rem;
  }
`

const InfoBox = styled.div`
  display: flex;
  align-items: baseline;
  flex-wrap: wrap;
  margin-bottom: 1rem;
  font-size: 1.4rem;
  line-height: 1.4;
  justify-content: center;
  order: 2;

  @media ${mediaQueries.desktop} {
    margin-bottom: 1.5rem;
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
  font-weight: 300;
  margin-bottom: 0.5rem;
`

const DateDivider = styled.span`
  display: inline-block;
  width: 2.4rem;
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
  justify-content: center;
  order: 3;
`
const TextLabel = styled.label`
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

const Credit = styled.div`
  text-align: center;
  margin: 2rem auto 0;
  max-width: 670px;
  opacity: 0.7;
  font-size: 1.2rem;
  line-height: 1.7;

  @media ${mediaQueries.desktop} {
    font-size: 1.4rem;
  }
`

const PageHeader = ({
  title,
  publishDate,
  heroImage,
  heroImageCredit,
  authors,
  categories,
  authorsWithoutAccount,
}) => {
  heroImage.title = heroImageCredit
  return (
    <StyledPageHeader>
      <ImgBox>
        <ImgWrapper img={heroImage} aspectRatio={2.5} />
        {heroImageCredit && <Credit>{heroImageCredit}</Credit>}
      </ImgBox>
      <Banner>
        <InfoBox>
          <InfoItem>
            <Date>{publishDate}</Date>
            {(authors || authorsWithoutAccount) && <DateDivider />}
          </InfoItem>
          <InfoItem>
            {authors && (
              <>
                {authors.map(({ slug, name }, i, authors) => (
                  <>
                    <AuthorLink key={slug} to={`/author/${slug}`}>
                      {name}
                    </AuthorLink>
                    {!!authors[i + 1] && <>,&nbsp;</>}
                  </>
                ))}
              </>
            )}
            {authorsWithoutAccount && (
              <>
                {' '}
                <TextLabel>{authorsWithoutAccount}</TextLabel>
              </>
            )}
          </InfoItem>
        </InfoBox>
        <HeaderWrapper>
          <StyledHeader
            lineHeight="Biggest"
            color="Dark"
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
}

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
    title: PropTypes.string,
  }),
  heroImageCredit: PropTypes.string,
  categories: PropTypes.arrayOf(
    PropTypes.shape({ title: PropTypes.string, slug: PropTypes.string })
  ),
  authors: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      slug: PropTypes.string,
    })
  ),
  authorsWithoutAccount: PropTypes.string,
}

export default PageHeader
