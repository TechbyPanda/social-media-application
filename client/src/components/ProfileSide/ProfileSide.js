import React from 'react'
import style from './profileSide.module.css'
import Search from '../Search/Search'
import ProfileCard from '../ProfileCard/ProfileCard'
import FollowersCard from '../FollowersCard/FollowersCard'

const ProfileSide = () => {
  return (
    <div className={style.profile}>
        <Search></Search>
        <ProfileCard location="homepage"/>
        <FollowersCard/>
    </div>
  )
}

export default ProfileSide
