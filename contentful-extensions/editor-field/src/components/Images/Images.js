import React from 'react'
import PropTypes from 'prop-types'
import './Images.scss'
import { classnames } from 'utils/classnames'

const Images = ({ attributes, children, url, float, maxWidth }) => {
  const isFloatActive = float === 'left'
  return (
    <div
      className={classnames('img-wrapper', {
        ['img-wrapper--centered']: !isFloatActive,
      })}
      {...attributes}
    >
      <img
        className={classnames({ ['img--left']: isFloatActive })}
        src={url}
        style={{ maxWidth }}
      />
      <span className={classnames('tag', { ['tag--left']: isFloatActive })}>
        {children}
      </span>
    </div>
  )
}

Images.propTypes = {
  attributes: PropTypes.object,
  url: PropTypes.string.isRequired,
  children: PropTypes.object.isRequired,
  float: PropTypes.oneOf(['left', undefined]),
  maxWidth: PropTypes.number,
}

Images.defaultProps = {
  maxWidth: 992,
}

export default Images
