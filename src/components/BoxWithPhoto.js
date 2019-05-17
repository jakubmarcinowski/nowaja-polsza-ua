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
  margin: 2.5rem auto;
  background: ${({ theme }) => theme.colors.listItemBackground};

  @media ${mediaQueries.tablet} {
    flex-direction: row;
    margin: 5rem auto 5rem;
    max-width: 80%;
  }

  @media ${mediaQueries.desktop} {
    margin: 5rem auto;
  }
`
const Info = styled.div`
  padding: 2rem;

  @media ${mediaQueries.phoneLandscape} {
    padding: 3rem;
  }

  @media ${mediaQueries.tablet} {
    padding: 3rem 3rem 4rem 1rem;
  }
`
const Image = styled(ImgWrapper)`
  border: 1px solid rgba(0, 0, 0, 0.05);
  
  @media ${mediaQueries.tablet} {
    position: absolute;
    top: -1.5rem;
    left: -1.5rem;
    min-width: 17rem;
    min-height: 22rem;
    max-width: 17rem;
    max-height: 22rem;
  }
`

const BoxWithPhoto = ({ image, children }) => (
  <Box>
    {image && <Image img={image} />}
    {children && <Info>{children}</Info>}
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
