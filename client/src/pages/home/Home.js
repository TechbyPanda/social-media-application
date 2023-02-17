import React from 'react'
import style from './Home.module.css'
import ProfileSide from '../../components/ProfileSide/ProfileSide'
import PostSide from '../../components/PostSide/PostSide'
import RightSide from '../../components/RightSide/RightSide'

const Home = () => {
  return (
    <div className={style.Home}>
      <ProfileSide></ProfileSide>
      <PostSide></PostSide>
      <RightSide></RightSide>
    </div>
  )
}

export default Home
