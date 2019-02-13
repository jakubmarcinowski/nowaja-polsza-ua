import React from 'react'
import Img from 'gatsby-image'
import PropTypes from 'prop-types'

const ImgWrapper = ({ img }) => {
  return img === undefined || img === null ? (
    <div>No image</div>
  ) : (
    <Img alt={img.title} fluid={img.fluid} />
  )
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
}

export default ImgWrapper
