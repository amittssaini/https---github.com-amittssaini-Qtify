import React from 'react'
import styles from './Button.module.css'
const Button = ({text}) => {
    console.log('hello i am button render');
  return (
   <button className={styles.button}>{text}</button>
  )
}

export default Button