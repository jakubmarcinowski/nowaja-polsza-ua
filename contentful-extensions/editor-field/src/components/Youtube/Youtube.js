import React from 'react'
import PropTypes from 'prop-types'
import '../Embed.scss'

const Youtube = ({ children, content }) => {
  return (
    <div className="videoWrapper">
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${content}`}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <p className="videoWrapperTitle">{children}</p>
    </div>
  )
}

Youtube.propTypes = {
  content: PropTypes.string.isRequired,
  children: PropTypes.object.isRequired,
}

export default Youtube
