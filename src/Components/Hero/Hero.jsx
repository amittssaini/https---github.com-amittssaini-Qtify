import React from 'react'
import HeroImage from '../../assets/vibrating-headphone 1.png'
import styles from './Hero.module.css'
const Hero = () => {
  return (
    <div className={styles.wrap}>
        <div className={styles.heroText}>
            <h1 className={styles.textOne}>100 Thousand Songs, ad-free</h1>
            <h1 className={styles.textSecond}>Over thousands podcast episodes</h1>
        </div>
        <div>
            <img className={styles.heroImage} src={HeroImage} alt='headphone' />
        </div>
    </div>
  )
}

export default Hero