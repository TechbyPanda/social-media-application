import React from 'react'
import style from './profile_card.module.css'
import {useSelector} from 'react-redux'
import {Link} from 'react-router-dom'

const ProfileCard = ({location}) => {
  const {user} = useSelector((state) => state.authReducer.authData )
  const posts = useSelector((state) => state.postReducer.posts )
  const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER
  
  return (
    <div className={style.profileCard}>
      <div className={style.profileImages}>
        <img src={user.coverPicture ? serverPublic + user.coverPicture : serverPublic + "cover.jpg"} alt="" />
        <img src={user.profilePicture ? serverPublic + user.profilePicture : serverPublic + "defaultProfile.jpg"} alt="" />
      </div>

      <div className={style.profileName}>
        <span>{user.firstname} {user.lastname}</span>
        <span>{user.worksAt? user.worksAt: "Write about yourself"}</span>
      </div>

      <div className={style.followStatus}>
        <hr />
        <div>
          <div className={style.follow}>
            <span>{user.followings.length}</span>
            <span>Followings</span>
          </div>
          <div className={style.vl}></div>
          <div className={style.follow}>
            <span>{user.followers.length}</span>
            <span>Followers</span>
          </div>
          {location === "profilePage" && (
            <>
              <div className={style.vl}></div>
              <div className={style.follow}>
                <span>{posts.filter((post) => post.userId === user._id).length}</span>
                <span>Post</span>
              </div>
            </>
          )}
        </div>
        <hr />
      </div>

      {location === "profilePage" ? "" : (
      <span>
        <Link style={{textDecoration: "none", color: "inherit"}} to={`/profile/${user._id}`}>My Profile</Link>
      </span>)}
      
    </div>
  )
}

export default ProfileCard
