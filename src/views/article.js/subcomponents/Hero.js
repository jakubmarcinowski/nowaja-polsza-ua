import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import ImgWrapper from '../../../components/ImgWrapper'
import Header from '../../../components/Header'
import Paragraph from '../../../components/Paragraph'
import Label from '../../../components/Label'

const StyledHero = styled.header`
  position: relative;
  text-align: center;
  margin-bottom: 7rem;
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
  background: ${({ theme }) => theme.colors.white};
  position: absolute;
  bottom: -7rem;
  left: 10%;
  width: 80%;
  padding: 3rem;
  border: 1px solid ${({ theme }) => theme.colors.dark};
`
const HeaderWrapper = styled.div`
  max-width: 800px;
  margin: auto;
`
const InfoBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: baseline;
  margin-bottom: 30px;
`
const Date = styled.div`
  margin: 0 2.4rem 0.5rem 0;
  display: inline-block;
`
const AuthorLink = styled(Link)`
  display: inline-block;
  transition: opacity ${props => props.theme.animations.default};
  margin-bottom: 0.5rem;
  text-decoration: underline;

  &:hover {
    opacity: 0.9;
  }
`
const CategoriesBox = styled.div`
  display: flex;
  justify-content: center;
`
const TextLabel = styled.label`
  font-size: 1.6rem;
`
const LabelLink = styled(Link)`
  &:not(:last-child) {
    margin: 0 25px 0 0;
  }
`
// Todo consol bug for paragraph
const Hero = ({
  article: { title, publishDate, heroImage, author, categories },
}) => {
  return (
    <StyledHero>
      <ImgBox>
        <ImgWrapper img={heroImage} aspectRatio={3.1} />
      </ImgBox>
      <Banner>
        <HeaderWrapper>
          <Header
            lineHeight="Large"
            size="XLarge"
            color="dark"
            weight="Bold"
            margin="0 0 2rem"
          >
            {title}
          </Header>
        </HeaderWrapper>
        <InfoBox>
          <Paragraph size="Large" color="dark">
            <TextLabel>опубликованный</TextLabel> <Date>{publishDate}</Date>
          </Paragraph>
          <Paragraph size="Large" color="dark">
            <TextLabel>автор</TextLabel>{' '}
            <AuthorLink to={`/author/${author.slug}`}>{author.name}</AuthorLink>
          </Paragraph>
        </InfoBox>
        <CategoriesBox>
          {categories.map(category => (
            <LabelLink to={`/category/${category.slug}`} key={category.slug}>
              <Label color={category.color}>{category.title}</Label>
            </LabelLink>
          ))}
        </CategoriesBox>
      </Banner>
    </StyledHero>
  )
}

export default Hero

{
  /* <StyledHeroImage>
<ImgWrapper img={heroImage} />
</StyledHeroImage> */
}
