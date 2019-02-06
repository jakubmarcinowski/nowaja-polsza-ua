import React from 'react'
import ImgValidator from '../components/ImgValidator'
import styles from './hero.module.css'
import PropTypes from 'prop-types'

const Hero = ({ data }) => {
  return (
    <div className={styles.hero}>
      <ImgValidator img={data.heroImage} />
      <div className={styles.heroDetails}>
        <h3 className={styles.heroHeadline}>{data.name}</h3>
        <p className={styles.heroTitle}>{data.title}</p>
        <p>{data.shortBio.shortBio}</p>
      </div>
    </div>
  )
}

Hero.propTypes = {
  data: PropTypes.shape({
    heroImage: PropTypes.shape({
      fluid: PropTypes.shape({
        aspectRatio: PropTypes.number,
        base64: PropTypes.string,
        sizes: PropTypes.string,
        srcSet: PropTypes.string,
      }),
    }),
    name: PropTypes.string,
    shortBio: PropTypes.shape({
      shortBio: PropTypes.string,
    }),
    title: PropTypes.string,
  }),
}

export default Hero
