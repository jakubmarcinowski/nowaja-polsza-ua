import React from 'react'
import PropTypes from 'prop-types'
import '../Embed.scss'

const SoundCloud = ({ children, content }) => {
  return (
    <div className="videoWrapper" contentEditable={false}>
      <iframe
        width="100%"
        height="300"
        scrolling="no"
        frameBorder="no"
        allow="autoplay"
        src={`https://w.soundcloud.com/player/?url=https://soundcloud.com/${content}`}
      ></iframe>
      <p className="videoWrapperTitle">{children}</p>
    </div>
  )
}

SoundCloud.propTypes = {
  content: PropTypes.string.isRequired,
  children: PropTypes.object.isRequired,
}

export default SoundCloud
