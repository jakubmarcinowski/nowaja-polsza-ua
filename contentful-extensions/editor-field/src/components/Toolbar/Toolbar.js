import React from 'react'
import PropTypes from 'prop-types'
import { classnames } from 'utils/classnames'
import './Toolbar.scss'

const Toolbar = ({ className, fixed, ...props }) => (
  <div
    {...props}
    className={classnames(className, 'toolbar', { 'toolbar--fixed': fixed })}
  />
)

Toolbar.propTypes = {
  className: PropTypes.string,
  fixed: PropTypes.bool,
}

Toolbar.defaultProps = {
  className: '',
  fixed: true,
}

export default Toolbar
