import React from 'react'
import styles from './Navbar.module.css'
import  Logo from './Logo'
import Search from '../Search/Search'
import Button from '../Button/Button'

 const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Logo />
      <Search />
       <Button text="Give Feedback" /> 
      
 
    </nav>
  )
}


// import  Logo  from './Logo';
// import React from 'react'
// import styles from './Navbar.module.css'
// import Search from '../Search/Search'
// import Button from '../Button/Button'
// const Navbar = () => {
//   return (
//     <div className="navbar bg-[#34C94B] h-[68px] flex justify-between items-center">
//       <div className="logo ml-4 flex items-center">
//         {" "}
//         {/* Adjust margin as needed */}
//         <Logo />
//       </div>
//       <input
//         placeholder="Search an album of your choice"
//         className="search-input h-10 w-[40%] rounded-xl p-5 border-2 border-black border-solid"
//       />
//       <button className="feedback-btn bg-[#121212] text-[#34C94B] font-Poppins rounded-xl p-3 mr-4">
//         {" "}
//         {/* Adjust margin */}
//         Give Feedback
//       </button>
//     </div>
//   );
// };

export default Navbar;