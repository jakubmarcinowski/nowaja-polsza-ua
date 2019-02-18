import React from 'react'
import Img from 'gatsby-image'
import PropTypes from 'prop-types'

const ImgWrapper = ({ img, aspectRatio }) => {
  return img === undefined || img === null ? (
    <div>No image</div>
  ) : (
    <Img alt={img.title} fluid={{ ...img.fluid, aspectRatio }} />
  )
}

ImgWrapper.defaultProps = {
  aspectRatio: 16 / 9,
}

ImgWrapper.propTypes = {
  img: PropTypes.shape({
    fluid: PropTypes.shape({
      aspectRatio: PropTypes.number,
      base64: PropTypes.string,
      sizes: PropTypes.string,
      srcSet: PropTypes.string,
    }),
  }),
  aspectRatio: PropTypes.number,
}

export default ImgWrapper
