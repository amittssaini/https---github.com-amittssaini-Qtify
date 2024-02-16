import React from 'react'
import logoImage from '../../assets/logoImage.png'
import styles from './logo.module.css'
export const Logo = () => {
  return (
    <img src={logoImage} alt='logo' className={styles.logo} />
  )
}
