import React from 'react'
import ImgValidator from './ImgValidator'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const HeroStyled = styled.div`
  position: relative;
  background: #000;
  color: #fff;
  text-align: center;

  .heroImage {
    /*
    Ensure golden ratio for the hero size while limiting it to some extend to
    the viewport width
  */
    height: 61.8vh;
    max-height: 400px;
  }

  .heroDetails {
    position: absolute;
    background: rgba(0, 0, 0, 0.7);
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 0);
    font-size: 14px;
    padding: 0 0.5em;
  }

  @media (min-width: 600px) {
    .heroDetails {
      font-size: 16px;
    }
  }

  @media (min-width: 1000px) {
    .heroDetails {
      font-size: 20px;
    }
  }

  .heroHeadline {
    margin: 0;
  }

  .heroTitle {
    margin: 0;
    font-size: 1.125em;
    font-weight: bold;
  }
`

const Hero = ({ data }) => (
  <HeroStyled>
    <ImgValidator img={data.heroImage} />
    <div className="heroDetails">
      <h3 className="heroHeadline">{data.name}</h3>
      <p className="heroTitle">{data.title}</p>
      <p>{data.shortBio.shortBio}</p>
    </div>
  </HeroStyled>
)

Hero.propTypes = {
  data: PropTypes.shape({
    heroImage: PropTypes.shape({
      fluid: PropTypes.shape({
        aspectRatio: PropTypes.number,
        base64: PropTypes.string,
        sizes: PropTypes.string,
        srcSet: PropTypes.string,
      }),
    }),
    name: PropTypes.string,
    shortBio: PropTypes.shape({
      shortBio: PropTypes.string,
    }),
    title: PropTypes.string,
  }),
}

export default Hero
