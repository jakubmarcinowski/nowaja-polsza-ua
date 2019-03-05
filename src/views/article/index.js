import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import ArticleSocialMediaList from './subcomponents/ArticleSocialMediaList'
import ArticleHeader from './subcomponents/ArticleHeader'
import Content from './subcomponents/Content'
import Header from '../../components/Header'
import RecommendedArticles from '../../components/RecommendedArticles'
import Wrapper from '../../components/Wrapper'
import { articleType } from '../../types/article'
import { mediaQueries } from '../../utils/mediaQueries'
import AuthorShort from '../../components/AuthorShort'
import ImgWrapper from '../../components/ImgWrapper'
import iconArrow from '../../../static/icon-arrow.svg'

const StyledArticle = styled.article`
  padding: 0 0 2rem;

  @media ${mediaQueries.tablet} {
    padding: 0 0 5rem;
  }
`

const HeaderStyled = styled(Header)`
  margin-bottom: 1rem;
  text-align: center;

  @media ${mediaQueries.tablet} {
    margin-bottom: 3rem;
  }
`

const Authors = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: -2rem;
  padding: 2rem;

  @media ${mediaQueries.tablet} {
    margin: -4rem;
    padding: 4rem;
  }
`

const SectionWrapper = styled.div`
  margin: 5rem 0;

  @media ${mediaQueries.desktop} {
    margin: 10rem 0;
  }

  &:last-child {
    margin-bottom: 0;
  }
`

const Gallery = styled.div`
  margin-top: 3.7em;
  padding-bottom: 3.7em;
  overflow: hidden;

  @media ${mediaQueries.tablet} {
    overflow: visible;
  }
`

const ArrowIcon = styled.img`
  max-width: 20px;
  opacity: 0.7;
`

const ArrowIconPrev = styled.img`
  max-width: 20px;
  transform: rotate(180deg);
`

const SliderStyled = styled(Slider)`
  &:hover {
    .slick-arrow {
      opacity: 1;
    }
  }

  /* ARROWS */
  .slick-arrow {
    opacity: 0;
    display: flex !important;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 7rem;
    z-index: 1;

    &:hover {
      opacity: 1;
    }

    &:before {
      content: none;
    }

    &.slick-disabled {
      display: none !important;
      background: none;
      pointer-events: none;
    }

    @media ${mediaQueries.phoneOnly} {
      display: none !important;
    }
  }

  .slick-next {
    right: 0;
    background: ${props => props.theme.gradients.carouselArrowNext};

    &:hover {
      background: ${props => props.theme.gradients.carouselArrowNext};

      ${ArrowIcon} {
        opacity: 1;
      }
    }
  }

  .slick-prev {
    left: 0;
    background: ${props => props.theme.gradients.carouselArrowPrev};

    &:hover {
      background: ${props => props.theme.gradients.carouselArrowPrev};

      ${ArrowIcon} {
        opacity: 1;
      }
    }
  }

  /* DOTS */
  .slick-dots {
    display: flex;
    justify-content: space-between;
    bottom: -3rem;

    li {
      margin: 0 2px;
      button {
        padding: 1rem;

        &:before {
          font-size: 1rem;
        }
      }
    }
  }
`

const ArticlePage = ({
  article: {
    title,
    heroImage,
    publishDate,
    body,
    authors,
    categories,
    lead,
    gallery,
  },
  posts,
}) => {
  const settings = {
    dots: true,
    infinite: false,
    arrows: true,
    nextArrow: (
      <div>
        <ArrowIcon src={iconArrow} alt="arrow" />
      </div>
    ),
    prevArrow: (
      <div>
        <ArrowIconPrev src={iconArrow} alt="arrow" />
      </div>
    ),
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: mediaQueries.tablet,
        settings: {
          arrows: false,
        },
      },
    ],
  }
  return (
    <StyledArticle>
      <Wrapper>
        <ArticleHeader
          title={title}
          publishDate={publishDate}
          heroImage={heroImage}
          authors={authors}
          categories={categories}
        />
      </Wrapper>
      <Wrapper size="Small" position="relative">
        <ArticleSocialMediaList />
        {body && <Content html={body.childMarkdownRemark.html} lead={lead} />}
        {gallery && (
          <Gallery>
            <SliderStyled {...settings}>
              {gallery.map(photo => (
                <ImgWrapper img={photo} key={photo.id} />
              ))}
            </SliderStyled>
          </Gallery>
        )}

        <ArticleSocialMediaList />
        <SectionWrapper>
          <HeaderStyled size="Biggest">
            {authors && (authors.length > 1 ? 'Авторы' : 'Автор')}
          </HeaderStyled>
          {authors &&
            (authors.length > 1 ? (
              <Authors>
                {authors.map(element => (
                  <AuthorShort author={element} key={element.id} few />
                ))}
              </Authors>
            ) : (
              <AuthorShort author={authors[0]} />
            ))}
        </SectionWrapper>
        <SectionWrapper>
          <HeaderStyled size="Biggest">
            Вам также может понравиться
          </HeaderStyled>
          <RecommendedArticles posts={posts} />
        </SectionWrapper>
      </Wrapper>
    </StyledArticle>
  )
}

ArticlePage.propTypes = {
  article: articleType.isRequired,
  posts: PropTypes.arrayOf(articleType),
}

export default ArticlePage
