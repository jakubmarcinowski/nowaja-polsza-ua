import React from 'react'
import PropTypes from 'prop-types'

const Images = ({ attributes, children, content }) => {
  return (
    <div className="imgWrapper" {...attributes}>
      <img src={content} />
      <span className="tag">{children}</span>
    </div>
  )
}

Images.propTypes = {
  attributes: PropTypes.object,
  content: PropTypes.string.isRequired,
  children: PropTypes.object.isRequired,
}

export default Images
