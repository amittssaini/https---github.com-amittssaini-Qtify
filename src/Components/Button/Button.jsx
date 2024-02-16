import React from 'react'
import styles from './Button.module.css'
const Button = ({children}) => {
    console.log('hello i am button render');
  return (
   <button className={styles.button}>{children}</button>
  )
}

export default Button