import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { mediaQueries } from '../utils/mediaQueries'
import ImgWrapper from './ImgWrapper'
import { childrenType } from '../types/children'
import archiveBg from '../../static/archive.jpg'

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

const Layer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${({ theme }) => theme.colors.archiveBackground};
}`

const ArchiveCover = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 15rem;
  background-image: url('${archiveBg}');
  background-size: cover;
  color: ${({ theme }) => theme.colors.white};

  @media ${mediaQueries.tablet} {
    min-width: 17rem;
    min-height: 22rem;
    max-width: 17rem;
    max-height: 22rem;
    margin: -1.5rem 1.5rem 0 -1.5rem;
  }
`

const Month = styled.span`
  font-size: 2.6rem;
  z-index: 1;
`

const Year = styled.span`
  font-size: 2.6rem;
  z-index: 1;
`

const Line = styled.span`
  height: 1px;
  width: 7rem;
  margin: 1rem 0;
  background: ${({ theme }) => theme.colors.white};
  z-index: 1;
`

const BoxWithPhoto = ({ image, children, archive, month, year }) => (
  <Box>
    {!archive && <div>{image && <Image img={image} />}</div>}
    {archive && (
      <div>
        <ArchiveCover>
          <Layer />
          <Month>{month}</Month>
          <Line />
          <Year>{year}</Year>
        </ArchiveCover>
      </div>
    )}
    {children && <Info>{children}</Info>}
  </Box>
)

BoxWithPhoto.propTypes = {
  archive: PropTypes.bool,
  month: PropTypes.string,
  year: PropTypes.number,
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
