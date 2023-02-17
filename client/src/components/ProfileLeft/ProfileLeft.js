import React from 'react'
import Search from '../Search/Search'
import FollowersCard from '../FollowersCard/FollowersCard'
import InfoCard from '../InfoCard/InfoCard'
import './ProfileLeft.css'

const ProfileLeft = () => {
  return (
    <div className='profileLeft'>
      <Search/>
      <InfoCard/>
      <FollowersCard/>
    </div>
  )
}

export default ProfileLeft
