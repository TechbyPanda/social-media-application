import React from 'react'
import style from './search.module.css'
import Logo from '../../img/logo.png'
import {UilSearch} from '@iconscout/react-unicons'


const Search = () => {
  return (
    <div className={style.logo_search}>
      <img src={Logo} alt="" />
      <div className={style.search}>
        <input type="text" placeholder='#Explore'/>
        <div className={style.s_icon}>
            <UilSearch></UilSearch>
        </div>
      </div>
    </div>
  )
}

export default Search
