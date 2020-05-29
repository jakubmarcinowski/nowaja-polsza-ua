import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import { classnames } from 'utils/classnames'
import './Toolbar.scss'

const Toolbar = forwardRef(function Toolbar(
  { className, fixed, ...props },
  ref
) {
  return (
    <div
      {...props}
      className={classnames(className, 'toolbar', { 'toolbar--fixed': fixed })}
      ref={ref}
    />
  )
})

Toolbar.propTypes = {
  className: PropTypes.string,
  fixed: PropTypes.bool,
}

Toolbar.defaultProps = {
  className: '',
  fixed: true,
}

export default Toolbar
