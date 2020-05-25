import React from 'react'
import PropTypes from 'prop-types'
import '../Embed.scss'

const Youtube = ({ children, content }) => {
  return (
    <div class="videoWrapper" contentEditable={false}>
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${content}`}
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <p class="videoWrapperTitle">{children}</p>
    </div>
  )
}

Youtube.propTypes = {
  content: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
}

export default Youtube
