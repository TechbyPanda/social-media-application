import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { followeUser, unFolloweUser } from '../../actions/userAction'
import style from '../FollowersCard/FollowersCard.module.css'

const User = ({person}) => {
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.authReducer.authData)
  const [following, setFollowing] = useState(person.followings.includes(user._id))
  const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER
  const handleFollow = () => {
    following ? 
    dispatch(followeUser(person._id, user)):
    dispatch(unFolloweUser(person._id, user))
  }
  return (
    <div className={style.follower}>
      <div>
        <img src={person.profilePicture ? serverPublic + person.profilePicture : serverPublic + "defaultProfile.jpg"} className={style.followerImg} alt="" />
        <div className={style.name}>
          <span>{person.firstname}</span>
          <span>@{person.username}</span>
        </div>
      </div>
      <button className={`btn ${style.fc_btn}`} onClick={handleFollow}>{following? "Unfollow": "Follow"}</button>
    </div>
  )
}

export default User
