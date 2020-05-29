import React from 'react'
import PropTypes from 'prop-types'
import MaterialSlider from '@material-ui/core/Slider'
import './Slider.scss'

const Slider = ({ label, value, ...props }) => (
  <div className="slider">
    <span className="slider__label">{label}</span>
    <MaterialSlider
      className="slider__input"
      aria-labelledby="input-slider"
      value={value}
      {...props}
    />
  </div>
)

Slider.propTypes = {
  value: PropTypes.number,
  label: PropTypes.string,
}

export default Slider
