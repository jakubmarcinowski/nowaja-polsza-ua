import React from 'react'
import PropTypes from 'prop-types'
import { classnames } from 'utils/classnames'
import './Toolbar.scss'

const Toolbar = ({ className, ...props }) => (
  <div {...props} className={classnames(className, 'toolbar')} />
)

Toolbar.propTypes = {
  className: PropTypes.string,
}

export default Toolbar
