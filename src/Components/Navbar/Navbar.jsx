// import React from 'react'
// import styles from './Navbar.module.css'
// import { Logo } from './Logo'
// import Search from '../Search/Search'
// import Button from '../Button/Button'

// export const Navbar = () => {
//   return (
//     <nav className={styles.navbar}>
//       <Logo />
//       <Search />
//        <Button text="Give Feedback" /> 
      
 
//     </nav>
//   )
// }


import React from "react";
import Button from "../Button/Button";
import Search from "../Search/Search";
import styles from './Navbar.module.css'
import LogoImage from "../../assets/logoImage.png"


export default function Navbar(){
    return(
        <>
            <nav className={styles.navbar}>
                <div className={styles.logoDiv}><img  src={LogoImage} alt="logo" width={67}/></div>
                 <Search search={"Search a song of your choice"}/>
                <Button children="Give Feedback"/>
            </nav>
        </>
    )
}