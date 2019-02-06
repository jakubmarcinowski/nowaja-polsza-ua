import React from 'react'
import ImgValidator from '../components/ImgValidator'
import styles from './hero.module.css'

export default ({ data }) => (
  <div className={styles.hero}>
    <ImgValidator img={data.heroImage} />
    <div className={styles.heroDetails}>
      <h3 className={styles.heroHeadline}>{data.name}</h3>
      <p className={styles.heroTitle}>{data.title}</p>
      <p>{data.shortBio.shortBio}</p>
    </div>
  </div>
)
