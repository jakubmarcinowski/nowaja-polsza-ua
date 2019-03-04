import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { mediaQueries } from '../utils/mediaQueries'
import ImgWrapper from './ImgWrapper'
import { childrenType } from '../types/children'

const Box = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  min-width: 100%;
  margin: 2rem auto;
  background: ${({ theme }) => theme.colors.listItemBackground};

  @media ${mediaQueries.phoneLandscape} {
    max-width: 30rem;
    min-width: 30rem;
  }

  @media ${mediaQueries.tablet} {
    flex-direction: row;
    margin: 5rem auto;
    max-width: 70%;
  }
`
const Image = styled(ImgWrapper)`
  @media ${mediaQueries.tablet} {
    position: absolute;
    top: -2rem;
    left: -2rem;
    min-width: 17rem;
    min-height: 22rem;
    max-width: 17rem;
    max-height: 22rem;
  }
`

const Info = styled.div`
  max-width: 70%;
  padding: 3rem 3rem 5rem 3rem;

  @media ${mediaQueries.tablet} {
    padding: 3rem 3rem 3rem 1rem;
  }
`

const BoxWithPhoto = ({ image, children }) => (
  <Box>
    {image && <Image img={image} />}
    <Info>{children}</Info>
  </Box>
)

BoxWithPhoto.propTypes = {
  children: childrenType,
  image: PropTypes.shape({
    fluid: PropTypes.shape({
      aspectRatio: PropTypes.number,
      base64: PropTypes.string,
      sizes: PropTypes.string,
      src: PropTypes.string,
      srcSet: PropTypes.string,
    }),
  }),
}

export default BoxWithPhoto
