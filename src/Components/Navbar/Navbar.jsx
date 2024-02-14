import React from 'react'
import styles from './Navbar.module.css'
import { Logo } from './Logo'
import Search from '../Search/Search'
import Button from '../Button/Button'

export const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Logo />
      <Search />
       <Button text="Give Feedback" /> 
      
 
    </nav>
  )
}
