import React from 'react'
import { ReactComponent as SearchIcon} from '../../assets/Search icon.svg'
import styles from './Search.module.css'
const Search = () => {
  return (
    <form className={styles.wrapper}>
     <div>
      <input  className={styles.input} placeholder='Search a album of your choice'/>
     </div>
     <div>
      <button className={styles.button}>
          <SearchIcon />
      </button>
     </div>
    </form>
  )
}

export default Search