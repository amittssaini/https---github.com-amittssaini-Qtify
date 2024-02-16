import React from 'react'
import styles from './Hero.module.css'
import headPhone from '../../assets/vibrating-headphone 1.png'
const HeroPhto = () => {
  return (
<div className={styles.wrap}>
<div className={styles.text}>
            <h1 className={styles.textFirst}>100 Thousand Songs, ad-free</h1>
            <h1 className={styles.textSecond}>Over thousands podcast episodes</h1>
        </div>
        <div>
            <img  className={styles.image} src={headPhone} alt="headphone" />
        </div>
</div>
  )
}

export default HeroPhto