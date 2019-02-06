import React from 'react'
import Img from 'gatsby-image'

const ImgValidator = ({ img }) =>
  img === undefined || img === null ? (
    <div>No image</div>
  ) : (
    <Img alt={img.title} fluid={img.fluid} />
  )

export default ImgValidator
