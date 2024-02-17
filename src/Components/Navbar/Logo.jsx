import React from 'react'
import logoImage from '../../assets/logoImage.png'
import styles from './logo.module.css'
 const Logo = () => {
  return (
    <img src={logoImage} alt='logo' className={styles.logo}/>
  )
}

// const Logo = () => {
//   return <img src="qtify-logo.png" alt="logo" />;
// };

 export default Logo